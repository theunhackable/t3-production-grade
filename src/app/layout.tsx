import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "~/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata = {
  title: "T3 production app",
  description: "some theo shit",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}/>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <Navbar />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
