import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Nexly - NextCareer AI",
  description: "AI-powered career guidance for your next move. 🚀",
};

export default function RootLayout({ children }) {

  return (
    <ClerkProvider appearance={{
      baseTheme:"dark",
    }}>
      <html suppressHydrationWarning lang="en" >
        <body suppressHydrationWarning className={`${inter.className}`}>
         

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange >

            <Header />
           
            <main className="min-h-screen">{children}</main>
            <Toaster richColors/>
            <footer className="bg-black py-5">

              <div className="container mx-auto px-2 text-center text-gray-200">
                <p>Made With @ By Abhi</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
