import SpotifyLogo from "../../public/SpotifyLogo.svg"
import Image from "next/image";
import PageTemplate from "@/Components/PageTemplate";


export default function Home() {
  return (
    <main>
      <PageTemplate />
    </main >
  );
}

// <h1 className="fixed top-10 md:left-1 text-9xl md:text-[200px] font-anton text-tertiary">SPOTIFY</h1>
// <div className="flex justify-center items-center bg-secondary w-screen h-screen">
// <div className="flex justify-center items-center w-2/4 h-2/4 bg-primary drop-shadow-xl">
//   <Image src={SpotifyLogo} alt="Spotify Logo" className="h-3/4 w-3/4 animate-pulse " />
// </div>
// </div>
// <h1 className="fixed bottom-0 right-[17%] md:right-14 font-anton text-9xl md:text-[200px] text-tertiary">UTILS</h1>