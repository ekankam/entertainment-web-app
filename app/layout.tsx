import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/query-client-provider";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Entertainment Web App",
  description:
    "A Frontend Mentor challenge built with NextJS, Tailwind CSS, Typescript, and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/assets/favicon-32x32.png"
          type="image/x-icon"
        />
      </head>
      <body className={outfit.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
