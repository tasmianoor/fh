import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Finding Home",
  description: "A collection of memories and stories of Robin Noor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* Navigation - Full Width */}
            <nav className="w-full border-b border-b-foreground/10">
              <div className="h-16 container mx-auto px-4 sm:px-[30px] md:px-[60px] flex justify-between items-center">
                <div className="flex gap-5 items-center font-semibold">
                  <Link href={"/"}>Finding Home</Link>
                  <div className="flex items-center gap-2">
                    <DeployButton />
                  </div>
                </div>
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
              </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 w-full">
              <div className="w-full">
                {children}
              </div>
            </main>

            {/* Footer - Full Width */}
            <footer className="bg-black text-white py-8">
              <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                  <span>Finding home</span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-sm text-gray-400">
                    Copyrighted 2024
                  </div>
                  <ThemeSwitcher />
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
