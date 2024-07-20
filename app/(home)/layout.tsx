import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OnlyAlgos",
  description:
    "Get your most difficult real life problems solved in seconds with OnlyAlogs. Interactive board shows you the solution step by step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fira_code.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar showName />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
