import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import GeneralFunctions from "./GeneralFunctions";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jost.className}>
        <Providers>
          <GeneralFunctions>{children}</GeneralFunctions>
        </Providers>
      </body>
    </html>
  );
}
