import "./globals.css";
import "./prism.css";
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
        <div className="m-10">{children}</div>
      </body>
    </html>
  );
}
