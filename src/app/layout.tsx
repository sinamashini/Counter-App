import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Counter App",
  description: "A simple Next.js counter with TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gray-50 flex items-center justify-center p-4",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
