"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const L = typeof window !== "undefined" ? require("leaflet") : null

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Solo en el cliente:", window.location.href);

      const mapContainer = document.getElementById("map");

      if (mapContainer?._leaflet_id) return;

      const map = L.map("map").setView([-27.7834, -64.2642], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      setTimeout(() => {
        map.invalidateSize();
      }, 500);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", paddingTop: "100px" }}>
      {/* Título principal */}
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>Contacto</h1>

      {/* Botones de WhatsApp y Facebook */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/549XXXXXXXXXX" // Reemplaza con el número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#25D366",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="24" height="24" />
          WhatsApp
        </a>

        {/* Botón de Facebook */}
        <a
          href="https://www.facebook.com/tu_pagina" // Reemplaza con la URL de Facebook
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#1877F2",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" width="24" height="24" />
          Facebook
        </a>
      </div>

      {/* Subtítulo del mapa */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>Nos podés encontrar en</h2>

      {/* Mapa */}
      <div id="map" style={{ width: "80%", height: "400px", marginTop: "10px", marginBottom: "20px" }}></div>
    </div>
  );
}

