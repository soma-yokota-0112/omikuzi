import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "おみくじ Web",
  description: "2025年の運勢を占うデジタルおみくじ。恋愛運、仕事運、健康運など、あなたの運命を詳細に診断します。結果はSNSでシェア可能！",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* Google AdSense - headタグ内に配置 */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1401337378112883"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <body
        className={`${shipporiMincho.variable} font-serif antialiased bg-stone-100 text-stone-800`}
      >
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
