import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://five-star-ball.example"),
  title: {
    default: "Five Star Ball Football Academy | Hayes",
    template: "%s | Five Star Ball",
  },
  description: "Five Star Ball Football Academy provides structured youth football coaching in Hayes and West London.",
  openGraph: {
    title: "Five Star Ball Football Academy",
    description: "Develop. Train. Compete.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
