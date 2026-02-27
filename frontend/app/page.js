'use client'
import { useState, useEffect } from "react";

export default function Home() {

  const [price, setPrice] = useState(1200);
  const [nights, setNights] = useState(1);
  const [total, setTotal] = useState(1200);

  useEffect(() => {
    setTotal(price * nights);
  }, [price, nights]);

  return (
    <div className="wrapper">

      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo">HOTEL POGÓRZE</div>
        <div className="menu">
          <a href="#rooms">Apartament</a>
          <a href="#gallery">Galeria</a>
          <a href="#booking">Rezerwacja</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Luxury Redefined</h1>
          <p>Prywatność. Komfort. Absolutna jakość.</p>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="section">
        <h2>Apartament Premium</h2>
        <p>
          70m² luksusu zaprojektowanego z myślą o najbardziej wymagających gościach.
          Smart system, prywatność, cisza i najwyższy standard wykończenia.
        </p>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="gallery">
        {[
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
          "https://images.unsplash.com/photo-1501117716987-c8e1ecb21014",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945"
        ].map((img, i) => (
          <div key={i} className="gallery-item" style={{backgroundImage:`url(${img})`}} />
        ))}
      </section>

      {/* BOOKING */}
      <section id="booking" className="section booking">
        <h2>Rezerwacja Online</h2>

        <div className="booking-box">
          <div>
            <label>Liczba nocy</label>
            <input 
              type="number"
              min="1"
              value={nights}
              onChange={(e)=>setNights(e.target.value)}
            />
          </div>

          <div>
            <label>Cena za noc (PLN)</label>
            <select onChange={(e)=>setPrice(e.target.value)}>
              <option value="1200">Standard – 1200 PLN</option>
              <option value="1500">Premium – 1500 PLN</option>
              <option value="1800">VIP – 1800 PLN</option>
            </select>
          </div>

          <div className="total">
            Łącznie: <span>{total} PLN</span>
          </div>

          <button>Zarezerwuj Teraz</button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Kontakt</h2>
        <p>Email: kontakt@hotelpogorze.pl</p>
        <p>Tel: +48 000 000 000</p>
      </section>

      <footer>
        © 2026 Hotel Pogórze – Luxury Experience
      </footer>

      <style jsx>{`
        html { scroll-behavior: smooth; }
        .wrapper { background:#0f0f0f; color:white; font-family:sans-serif; }

        .nav {
          position:fixed;
          width:100%;
          display:flex;
          justify-content:space-between;
          padding:20px 10%;
          backdrop-filter:blur(10px);
          background:rgba(0,0,0,0.6);
          z-index:1000;
        }

        .logo { color:#d4af37; font-weight:bold; letter-spacing:2px; }

        .menu a {
          margin-left:20px;
          text-decoration:none;
          color:white;
        }

        .hero {
          height:100vh;
          background-image:url("https://images.unsplash.com/photo-1501117716987-c8e1ecb21014");
          background-size:cover;
          background-position:center;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .hero-overlay {
          background:rgba(0,0,0,0.6);
          padding:60px;
          border-radius:20px;
          text-align:center;
        }

        .hero h1 {
          font-size:70px;
          margin-bottom:20px;
          color:#d4af37;
        }

        .section {
          padding:120px 10%;
          text-align:center;
        }

        .gallery {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
        }

        .gallery-item {
          height:400px;
          background-size:cover;
          background-position:center;
          transition:0.4s;
        }

        .gallery-item:hover {
          transform:scale(1.05);
        }

        .booking-box {
          max-width:500px;
          margin:auto;
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        input, select {
          padding:12px;
          background:#1a1a1a;
          border:1px solid #333;
          color:white;
        }

        .total span {
          color:#d4af37;
          font-size:22px;
        }

        button {
          padding:15px;
          background:#d4af37;
          border:none;
          font-weight:bold;
          cursor:pointer;
        }

        footer {
          padding:40px;
          text-align:center;
          background:black;
        }

      `}</style>

    </div>
  );
}
