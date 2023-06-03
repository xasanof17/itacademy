import { Navbar, Sidebar } from "@/components";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Next.js is a modern JavaScript framework for building user interfaces.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex flex-grow flex-col">
        <Navbar />
        <div className="px-2">{children}</div>
      </section>
    </main>
  );
}
