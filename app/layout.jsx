export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b0b12", color: "white", fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
