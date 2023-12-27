import {Metadata} from "next";
import {Toaster} from "sonner";

import "@/styles/globals.css";
import "@fontsource/rubik";
import "@fontsource/rubik-mono-one";
import {ThemeProvider} from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "coolor Extractor",
  description: "Extract prominent colors from an image",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors />
        <ThemeProvider attribute="class">
          <main className="bg-neutral-50-50 dark:bg-neutral-900">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
