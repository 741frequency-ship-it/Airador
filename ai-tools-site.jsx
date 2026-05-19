import { useState } from "react";

const tools = [
  { id: 1, name: "ChatGPT", category: "Yazı", tag: "En Popüler", desc: "Metin yazımı, fikir üretme, kod yardımı için sektör lideri.", rating: 4.8, price: "Ücretsiz / $20/ay", link: "#", badge: "🔥" },
  { id: 2, name: "Midjourney", category: "Görsel", tag: "Sanat", desc: "Metinden inanılmaz kalitede görseller üretir. Tasarımcıların favorisi.", rating: 4.7, price: "$10/ay'dan", link: "#", badge: "🎨" },
  { id: 3, name: "Claude", category: "Yazı", tag: "Analiz", desc: "Uzun belge analizi ve karmaşık akıl yürütmede en güçlü AI.", rating: 4.8, price: "Ücretsiz / $20/ay", link: "#", badge: "🧠" },
  { id: 4, name: "ElevenLabs", category: "Ses", tag: "Ses Klonlama", desc: "Gerçekçi ses klonlama ve metin-konuşmaya dönüştürme.", rating: 4.6, price: "$5/ay'dan", link: "#", badge: "🎙️" },
  { id: 5, name: "Runway", category: "Video", tag: "Video AI", desc: "Metinden video üretimi ve video düzenleme için güçlü araç.", rating: 4.5, price: "$12/ay'dan", link: "#", badge: "🎬" },
  { id: 6, name: "Cursor", category: "Kod", tag: "Geliştirici", desc: "AI destekli kod editörü. Programcılığın geleceği şu an burada.", rating: 4.9, price: "Ücretsiz / $20/ay", link: "#", badge: "⚡" },
  { id: 7, name: "Perplexity", category: "Arama", tag: "Araştırma", desc: "AI destekli arama motoru. Kaynak göstererek yanıt verir.", rating: 4.6, price: "Ücretsiz / $20/ay", link: "#", badge: "🔍" },
  { id: 8, name: "Suno", category: "Müzik", tag: "Müzik AI", desc: "Metinden tam müzik parçası üretir. Yeni nesil müzik prodüksiyonu.", rating: 4.4, price: "Ücretsiz / $8/ay", link: "#", badge: "🎵" },
  { id: 9, name: "Notion AI", category: "Verimlilik", tag: "İş Aracı", desc: "Notlarını akıllı hale getirir. Özetler, yazar, organize eder.", rating: 4.3, price: "$8/ay'dan", link: "#", badge: "📋" },
];

const categories = ["Tümü", "Yazı", "Görsel", "Ses", "Video", "Kod", "Arama", "Müzik", "Verimlilik"];

const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));

export default function App() {
  const [active, setActive] = useState("Tümü");
  const [search, setSearch] = useState("");

  const filtered = tools.filter(t =>
    (active === "Tümü" || t.category === active) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050810",
      color: "#e8eaf0",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Space+Grotesk:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #050810; } ::-webkit-scrollbar-thumb { background: #2a3a6a; border-radius: 4px; }
        .card { background: linear-gradient(135deg, #0d1326 0%, #111827 100%); border: 1px solid #1e2a45; border-radius: 16px; padding: 24px; transition: all 0.25s ease; cursor: pointer; }
        .card:hover { border-color: #3b5bdb; transform: translateY(-4px); box-shadow: 0 12px 40px rgba(59,91,219,0.15); }
        .btn { background: linear-gradient(135deg, #3b5bdb, #1971c2); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; letter-spacing: 0.3px; }
        .btn:hover { opacity: 0.9; transform: scale(1.03); }
        .cat-btn { background: transparent; border: 1px solid #1e2a45; color: #8899bb; padding: 7px 16px; border-radius: 20px; font-size: 13px; cursor: pointer; transition: all 0.2s; }
        .cat-btn.active { background: #3b5bdb; border-color: #3b5bdb; color: white; }
        .cat-btn:hover:not(.active) { border-color: #3b5bdb; color: #aab8e0; }
        .badge { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; background: rgba(59,91,219,0.15); color: #7c9ce8; border: 1px solid rgba(59,91,219,0.3); }
        input { background: #0d1326; border: 1px solid #1e2a45; color: #e8eaf0; padding: 12px 20px; border-radius: 12px; font-size: 14px; outline: none; transition: border 0.2s; }
        input:focus { border-color: #3b5bdb; }
        .hero-glow { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(59,91,219,0.12) 0%, transparent 70%); pointer-events: none; }
        @keyframes pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
        .live-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: pulse 2s infinite; display: inline-block; margin-right: 6px; }
      `}</style>

      {/* Header */}
      <header style={{ borderBottom: "1px solid #1e2a45", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(5,8,16,0.95)", backdropFilter: "blur(10px)", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", background: "linear-gradient(135deg, #7c9ce8, #3b5bdb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ⚡ AIRadar
          </div>
          <span style={{ fontSize: 11, background: "#0f1e3d", border: "1px solid #1e3a7a", color: "#7c9ce8", padding: "2px 8px", borderRadius: 4 }}>BETA</span>
        </div>
        <nav style={{ display: "flex", gap: 24, fontSize: 14, color: "#8899bb" }}>
          <span style={{ cursor: "pointer" }}>Araçlar</span>
          <span style={{ cursor: "pointer" }}>Karşılaştır</span>
          <span style={{ cursor: "pointer" }}>Blog</span>
        </nav>
        <button className="btn" style={{ fontSize: 13, padding: "8px 18px" }}>Bülten</button>
      </header>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 40px 60px", position: "relative", overflow: "hidden" }}>
        <div className="hero-glow" />
        <div style={{ marginBottom: 16, display: "flex", justifyContent: "center", alignItems: "center", gap: 6, fontSize: 13, color: "#8899bb" }}>
          <span className="live-dot" /><span>{tools.length} araç incelendi · Sürekli güncelleniyor</span>
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 62px)", fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, marginBottom: 20 }}>
          En İyi AI Araçlarını<br />
          <span style={{ background: "linear-gradient(135deg, #7c9ce8 0%, #3b5bdb 50%, #60c4ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Keşfet & Kazan
          </span>
        </h1>
        <p style={{ fontSize: 17, color: "#8899bb", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.6 }}>
          Dürüst incelemeler, gerçek puanlar. Her araç için affiliate linkimiz var — sıfır taraflılık.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍  Araç ara..." style={{ width: 300 }} />
        </div>
      </section>

      {/* Categories */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "0 40px 32px", justifyContent: "center" }}>
        {categories.map(c => (
          <button key={c} className={`cat-btn ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>

      {/* Grid */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, padding: "0 40px 80px", maxWidth: 1100, margin: "0 auto" }}>
        {filtered.map(t => (
          <div key={t.id} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{t.badge}</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</h2>
              </div>
              <span className="badge">{t.tag}</span>
            </div>
            <p style={{ fontSize: 14, color: "#8899bb", lineHeight: 1.6, marginBottom: 16 }}>{t.desc}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <div style={{ color: "#f59e0b", fontSize: 13, letterSpacing: 1 }}>{stars(t.rating)}</div>
                <div style={{ fontSize: 12, color: "#6678a0", marginTop: 2 }}>{t.rating}/5.0</div>
              </div>
              <div style={{ fontSize: 13, color: "#7c9ce8", fontWeight: 600 }}>{t.price}</div>
            </div>
            <button className="btn" style={{ width: "100%" }} onClick={() => alert(`${t.name} affiliate linkine gidiliyor!`)}>
              İncele & Dene →
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", padding: 60, color: "#8899bb" }}>
            Arama sonucu bulunamadı.
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1e2a45", padding: "32px 40px", textAlign: "center", color: "#3d4f6e", fontSize: 13 }}>
        © 2026 AIRadar — Affiliate linkler içerir. Sitemizi desteklediğiniz için teşekkürler.
      </footer>
    </div>
  );
}
