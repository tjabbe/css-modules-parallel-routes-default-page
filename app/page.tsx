import Link from "next/link";
import Headline from "../components/Headline/Headline";

export default function Home() {
  return (
    <div>
      <Headline title="Headline from app/page.tsx" />
      <Link href="/demo" style={{ display: "block" }}>
        Go to /demo parallel route
      </Link>
      <Link href="/">Go to /</Link>
    </div>
  );
}
