export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-3xl font-bold mt-8">Sobre Nosotros</h1>
      <p className="mt-4 max-w-2xl text-lg">
        Fundada en <strong>2025</strong>, <strong>Radio Life 107.9</strong> nació con la misión de llevar la mejor música, entretenimiento e información a cada rincón de <strong>Beltrán</strong> y más allá. Nos enorgullece ser una radio cercana a nuestra comunidad, conectando a las personas a través del poder del sonido.  
        <br />
        Somos una radio online dedicada a brindarte la mejor música en vivo. ¡Gracias por sintonizarnos!
      </p>

      {/* Footer con borde redondeado y ancho extendido */}
      <footer className="w-11/12 bg-[#333] text-white py-4 mt-12 rounded-xl">
        <p className="text-center text-sm">
          © 2025 Radio Life. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

