import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OnlyAlgos",
  description:
    "Get your most difficult real life problems solved in seconds with OnlyAlogs. Interactive board shows you the solution step by step.",
};

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fira.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
