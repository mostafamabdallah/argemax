import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agremax",
  description:
    "AgreMax has an enormous impact throughout diversified commodities and trading both in terms of products, markets and business partners. The services that we offer as an accessory element to our core product offer are as diversified as they are comprehensive.  ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className={inter.className}>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
