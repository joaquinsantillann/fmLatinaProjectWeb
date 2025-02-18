"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const L = typeof window !== "undefined" ? require("leaflet") : null;

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Solo en el cliente:", window.location.href);

      const mapContainer = document.getElementById("map");

      if (mapContainer?._leaflet_id) return;

      const map = L.map("map").setView(
        [-27.826153173517337, -64.05931649207261],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Agregar marcador en las coordenadas del mapa
      L.marker([-27.826153173517337, -64.05931649207261])
        .addTo(map)
        .bindPopup("📍")
        .openPopup();

      setTimeout(() => {
        map.invalidateSize();
      }, 500);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "150px", // Se aumenta el margen superior para evitar que el header tape contenido
      }}
    >
      {/* Título principal */}
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
      >
        Contacto
      </h1>

      {/* Texto sobre las redes */}
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20px", // Espaciado adicional
        }}
      >
        ¡Nuestras redes!
      </h2>

      {/* Botones de WhatsApp y Facebook */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me" // Reemplaza con el número de WhatsApp
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width="24"
            height="24"
          />
          WhatsApp
        </a>

        {/* Botón de Facebook */}
        <a
          href="https://www.facebook.com" // Reemplaza con la URL de Facebook
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
            alt="Facebook"
            width="24"
            height="24"
          />
          Facebook
        </a>
      </div>

      {/* Subtítulo del mapa */}
      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}
      >
        Nos podés encontrar en
      </h2>

      {/* Mapa */}
      <div
        id="map"
        style={{
          width: "80%",
          height: "400px",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      ></div>

      {/* Footer */}
      <footer className="w-11/12 mx-auto bg-[#333] py-4 mt-8 rounded-xl">
        <p className="text-center text-sm">
          © 2025 Radio Life. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

