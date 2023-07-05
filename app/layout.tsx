import "./globals.css";

export default function RootLayout({
  slot,
  children,
}: {
  slot: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          {slot}
        </main>
      </body>
    </html>
  );
}
