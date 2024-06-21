import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Navbar from "~/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "T3 production app",
  description: "some theo shit",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
