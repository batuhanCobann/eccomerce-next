

import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const Kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Kumbh.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
