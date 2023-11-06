import Navbar from "./components/Navbar";
import { ThemeProviders } from "./components/ThemeProvider";
import "./globals.css";
import "./prism.css";
// import "./pre.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Blog",
  description: "Nextjs, Tailwindcss and MDX blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-primary ${inter.className}`}>
      <ThemeProviders>
        <Navbar/>
        <div className="m-16">{children}</div>
      </ThemeProviders>
      </body>
    </html>
  );
}
