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
    <div style={{fontFamily:"Arial, sans-serif", color:"#111"}}>

      {/* HERO */}
      <section style={{
        height:"90vh",
        backgroundImage:"url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        textAlign:"center"
      }}>
        <div style={{background:"rgba(0,0,0,0.6)", padding:"40px", borderRadius:"10px"}}>
          <h1 style={{fontSize:"60px", marginBottom:"20px"}}>Hotel Pogórze</h1>
          <p style={{fontSize:"22px"}}>Luksusowy wypoczynek w sercu Tuchowa</p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{padding:"80px 10%", textAlign:"center"}}>
        <h2 style={{fontSize:"36px", marginBottom:"20px"}}>Nasz Apartament</h2>
        <p style={{maxWidth:"700px", margin:"0 auto", fontSize:"18px"}}>
          Nowoczesny, w pełni wyposażony apartament premium.
          Komfort, cisza, prywatność oraz najwyższy standard wykończenia.
        </p>
      </section>

      {/* AMENITIES */}
      <section style={{background:"#f5f5f5", padding:"80px 10%"}}>
        <h2 style={{textAlign:"center", fontSize:"36px", marginBottom:"40px"}}>Udogodnienia</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
          gap:"30px"
        }}>
          <div>🛏 Klimatyzacja</div>
          <div>📶 Szybkie WiFi</div>
          <div>🚗 Darmowy parking</div>
          <div>☕ Ekspres do kawy</div>
          <div>📺 Smart TV</div>
          <div>🛁 Luksusowa łazienka</div>
        </div>
      </section>

      {/* BOOKING */}
      <section style={{padding:"80px 10%"}}>
        <h2 style={{textAlign:"center", fontSize:"36px", marginBottom:"40px"}}>Rezerwacja</h2>

        <form style={{
          maxWidth:"500px",
          margin:"0 auto",
          display:"flex",
          flexDirection:"column",
          gap:"15px"
        }}>
          <input placeholder="Imię i nazwisko" />
          <input placeholder="Email" />
          <input type="date" />
          <input type="date" />
          <button style={{
            background:"#000",
            color:"white",
            padding:"15px",
            border:"none",
            cursor:"pointer"
          }}>
            Zarezerwuj
          </button>
        </form>
      </section>

      {/* MAP */}
      <section style={{padding:"80px 10%", background:"#f5f5f5"}}>
        <h2 style={{textAlign:"center", fontSize:"36px", marginBottom:"30px"}}>Lokalizacja</h2>

        <iframe
          src="https://www.google.com/maps?q=Tuchów&output=embed"
          width="100%"
          height="400"
          style={{border:0}}
          loading="lazy"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer style={{
        background:"#000",
        color:"white",
        padding:"40px",
        textAlign:"center"
      }}>
        <p>Hotel Pogórze © 2026</p>
      </footer>

    </div>
  );
}
