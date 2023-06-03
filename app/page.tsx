import { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WWW IT ACADEMY",
};

export default function Home() {
  return (
    <section className="mx-auto flex h-screen max-w-4xl flex-col items-center justify-center">
      <h1 className="mb-5 text-center text-5xl font-bold text-blue-400">
        Welcome to our WWW IT ACADEMY
      </h1>
      <Link
        href="/dashboard"
        className="rounded-xl border bg-blue-500 px-4 py-3 text-xl font-bold text-white"
      >
        Go to dashboard
      </Link>
    </section>
  );
}
