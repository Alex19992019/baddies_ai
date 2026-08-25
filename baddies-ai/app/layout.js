import "./globals.css";

export const metadata = {
  title: "Baddies AI — Crea tu personaje",
  description: "the real baddies are in tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
