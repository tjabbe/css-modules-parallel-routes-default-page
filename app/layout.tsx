import Link from "next/link";
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
          <Link href="/demo" style={{ display: "block" }}>
            Go to /demo parallel route
          </Link>
          <Link href="/">Go to /</Link>
          {children}
          {slot}
        </main>
      </body>
    </html>
  );
}
