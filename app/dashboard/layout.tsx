import { Navbar, Sidebar } from "@/components";
import { Metadata } from "next";

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
        <div>{children}</div>
      </section>
    </main>
  );
}
