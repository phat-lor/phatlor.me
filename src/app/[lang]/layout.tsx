import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { Providers } from "../providers";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { type Locale } from "@/i18n.config";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
type Props = {
  params: { lang: string };
};
export async function generateMetadata({
  params,
}: Props): // parent: ResolvingMetadata,
Promise<Metadata> {
  // read route params
  const lang = params.lang as Locale;
  const { metadata } = await getDictionary(lang);

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL("https://fastport.page"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "th-TH": "/th",
      },
    },
    twitter: {
      card: "summary",
      site: "@fastport",
      images: metadata.twitter.images,
    },
    openGraph: {
      type: "website",
      locale: metadata.openGraph.locale,
      url: "https://fastport.page",
      siteName: "Fastport",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
