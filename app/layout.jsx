import "./globals.css";

export const metadata = {
  title: "Henry Ameen Charles | Website Developer",
  description:
    "Henry Ameen Charles creates distinctive digital experiences with Webflow, Shopify and Framer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
