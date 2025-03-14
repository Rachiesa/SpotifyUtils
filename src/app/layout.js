import { Anton, Trispace } from "next/font/google";
import Nav from "@/Components/Nav";
import "./globals.css";



const anton = Anton({
  weight: "400", variable: "--font-anton", subsets: ["latin"]
});

const trispace = Trispace({
  variable: "--font-trispace", subsets: ["latin"]
})


export const metadata = {
  title: "Spotify.Utils",
  description: "Spotify Utility",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${trispace.variable} antialiased `}
      >
        <div className="fixed top-0 right-0 text-xl z-10">
          <Nav />
        </div>
        {children}
      </body>
    </html >
  );
}
