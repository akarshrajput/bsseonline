import "./globals.css";

export const metadata = {
  title: "Board Of Senior Secondary Education",
  description: "उच्चतर माध्यमिक शिक्षा परिषद",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
