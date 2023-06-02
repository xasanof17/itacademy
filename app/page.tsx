import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WWW IT ACADEMY",
};

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl text-blue-400 font-bold mb-5 ">Welcome to our WWW IT ACADEMY</h1>
      <Link href='/dashboard' className="bg-blue-500 py-3 p-2 border rounded-xl text-white text-xl font-bold">Go to dashboard</Link>
    </section>
  );
}
