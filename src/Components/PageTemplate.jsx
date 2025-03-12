"use client";
import { usePathname } from "next/navigation"
import About from "@/app/about/About";
import Utils from "@/app/utils/Utils";
import Song from "@/app/utils/song/Song";
import SpotifyLogo from "../../public/SpotifyLogo.svg"
import Image from "next/image";

export default function PageTemplate() {

    let a = usePathname().toUpperCase().split("/").length - 1;
    let displaypath = usePathname().toUpperCase().split("/")[a];
    return (
        <>
            <h1 className="fixed top-10 md:left-1 text-8xl md:text-[200px] font-anton text-tertiary">{displaypath === "" ? "SPOTIFY" : displaypath}</h1>
            <div className="flex justify-center items-center bg-secondary w-screen h-screen">
                <div className="flex flex-col justify-center items-center p-2 gap-2 w-full md:w-2/4 h-3/5 md:h-2/4 bg-primary drop-shadow-xl text-tertiary">
                    {displaypath === "" && <Image src={SpotifyLogo} alt="Spotify Logo" className="h-3/4 w-3/4 animate-pulse " />}
                    {displaypath === "ABOUT" && <About />}
                    {displaypath === "UTILS" && <Utils />}
                    {displaypath === "SONG" && <Song />}
                </div>
            </div>
            <h1 className="fixed bottom-0 right-0 md:right-14 font-anton text-8xl md:text-[200px] text-tertiary">{displaypath === "" ? "UTILS" : displaypath}</h1>
        </>
    )
}

