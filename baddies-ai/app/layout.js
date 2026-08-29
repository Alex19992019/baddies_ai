import "./globals.css";

export const metadata = {
  title: "Baddies AI — Crea tu personaje",
  description: "the real baddies are in tech",
};

// Tells the browser this page is light-only, so Android's forced dark theme
// (Chrome/Samsung Internet) and iOS don't repaint the white polaroid card and
// dark text with inverted/dark colors.
export const viewport = {
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
