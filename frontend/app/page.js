'use client'

import { useState } from "react";

export default function Home() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: ""
  });

  return (
    <div style={{
      fontFamily:"'Segoe UI', sans-serif",
      background:"#0f0f0f",
      color:"#fff",
      lineHeight:"1.6"
    }}>

      {/* NAVBAR */}
      <nav style={{
        position:"fixed",
        width:"100%",
        top:0,
        padding:"20px 10%",
        display:"flex",
        justifyContent:"space-between",
        background:"rgba(0,0,0,0.7)",
        backdropFilter:"blur(10px)",
        zIndex:1000
      }}>
        <h2 style={{color:"#d4af37"}}>HOTEL POGÓRZE</h2>
        <div style={{display:"flex", gap:"20px"}}>
          <a href="#about" style={{color:"#fff", textDecoration:"none"}}>Apartament</a>
          <a href="#booking" style={{color:"#fff", textDecoration:"none"}}>Rezerwacja</a>
          <a href="#contact" style={{color:"#fff", textDecoration:"none"}}>Kontakt</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height:"100vh",
        backgroundImage:"url('https://images.unsplash.com/photo-1501117716987-c8e1ecb21014')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
      }}>
        <div style={{background:"rgba(0,0,0,0.6)", padding:"60px", borderRadius:"20px"}}>
          <h1 style={{fontSize:"70px", marginBottom:"20px", letterSpacing:"3px"}}>
            LUKSUS W SERCU Tuchowa
          </h1>
          <p style={{fontSize:"22px", color:"#ddd"}}>
            Prywatność • Komfort • Najwyższy Standard
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{padding:"120px 10%", textAlign:"center"}}>
        <h2 style={{fontSize:"40px", color:"#d4af37", marginBottom:"30px"}}>
          Apartament Premium
        </h2>
        <p style={{maxWidth:"800px", margin:"0 auto", fontSize:"18px", color:"#ccc"}}>
          Nowoczesny apartament zaprojektowany z myślą o najbardziej wymagających gościach.
          Eleganckie wnętrza, najwyższa jakość materiałów i wyjątkowa atmosfera.
        </p>
      </section>

      {/* AMENITIES */}
      <section style={{background:"#111", padding:"100px 10%"}}>
        <h2 style={{textAlign:"center", fontSize:"40px", color:"#d4af37", marginBottom:"60px"}}>
          Udogodnienia
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"40px",
          textAlign:"center"
        }}>
          {[
            "🛏 Klimatyzacja",
            "📶 Szybkie WiFi",
            "🚗 Prywatny Parking",
            "☕ Ekspres Premium",
            "📺 Smart TV 65\"",
            "🛁 Łazienka Luxury",
            "🔐 Smart Lock",
            "🍷 Mini Bar"
          ].map((item, index) => (
            <div key={index} style={{
              background:"#1a1a1a",
              padding:"40px",
              borderRadius:"15px",
              transition:"0.3s",
              border:"1px solid #222"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" style={{padding:"120px 10%", textAlign:"center"}}>
        <h2 style={{fontSize:"40px", color:"#d4af37", marginBottom:"50px"}}>
          Rezerwacja
        </h2>

        <form style={{
          maxWidth:"500px",
          margin:"0 auto",
          display:"flex",
          flexDirection:"column",
          gap:"20px"
        }}>
          <input placeholder="Imię i nazwisko" style={inputStyle}/>
          <input placeholder="Email" style={inputStyle}/>
          <input type="date" style={inputStyle}/>
          <input type="date" style={inputStyle}/>
          <button style={{
            background:"#d4af37",
            color:"#000",
            padding:"18px",
            border:"none",
            fontWeight:"bold",
            fontSize:"16px",
            cursor:"pointer",
            borderRadius:"8px",
            transition:"0.3s"
          }}>
            Zarezerwuj Teraz
          </button>
        </form>
      </section>

      {/* MAP */}
      <section style={{padding:"120px 10%", background:"#111"}}>
        <h2 style={{textAlign:"center", fontSize:"40px", color:"#d4af37", marginBottom:"40px"}}>
          Lokalizacja
        </h2>

        <iframe
          src="https://www.google.com/maps?q=Tuchów&output=embed"
          width="100%"
          height="450"
          style={{borderRadius:"15px", border:"none"}}
          loading="lazy"
        ></iframe>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding:"120px 10%", textAlign:"center"}}>
        <h2 style={{fontSize:"40px", color:"#d4af37", marginBottom:"30px"}}>
          Kontakt
        </h2>
        <p>Email: kontakt@hotelpogorze.pl</p>
        <p>Tel: +48 000 000 000</p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background:"#000",
        padding:"40px",
        textAlign:"center",
        borderTop:"1px solid #222"
      }}>
        <p style={{color:"#777"}}>© 2026 Hotel Pogórze – Wszelkie prawa zastrzeżone</p>
      </footer>

    </div>
  );
}

const inputStyle = {
  padding:"15px",
  borderRadius:"8px",
  border:"1px solid #333",
  background:"#1a1a1a",
  color:"#fff",
  fontSize:"15px"
}
