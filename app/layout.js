import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#212225] text-white">
        <nav className="absolute top-0 left-0 right-0 flex justify-around p-4 bg-[#333] shadow-md">
          <Link href="/" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">Inicio</Link>
          <Link href="/about" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">Sobre Nosotros</Link>
          <Link href="/contact" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">Contacto</Link>
        </nav>
        <main className="flex flex-col items-center justify-center h-screen pt-20">{children}</main>
      </body>
    </html>
  );
}

