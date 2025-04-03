"use client";
import { usePathname } from "next/navigation"
import About from "@/app/about/About";
import Utils from "@/app/utils/Utils";
import Song from "@/app/utils/song/Song";
import Artist from "@/app/utils/artist/Artist";
import SpotifyLogo from "../../public/SpotifyLogo.svg"
import Image from "next/image";
import { gsap } from "gsap";
import React, { use } from "react";
import { useEffect } from "react";



export default function PageTemplate() {
    let a = usePathname().toUpperCase().split("/").length - 1;
    let displaypath = usePathname().toUpperCase().split("/")[a];
    gsap.config({ nullTargetWarn: false });
    let tl = gsap.timeline(
    );
    // gsap animation 

    useEffect(() => {
        tl.set("#titletop", { duration: 0, x: -500, opacity: 0 }, 0)
            .to("#titletop", { delay: 0.5, duration: 2, x: 0, opacity: 1 }, 0)
            .set("#titlebot", { duration: 0, x: 500, opacity: 0 }, 0)
            .to("#titlebot", { delay: 0.5, duration: 2, x: 0, opacity: 1 }, 0)
            .set("#content", { duration: 0, x: -500, opacity: 0 }, 0)
            .to("#content", { duration: 2, x: 0, opacity: 1 }, 0)

    })

    return (
        <main className="overflow-hidden">
            <h1 id="titletop" className="fixed opacity-0 top-10 md:left-1 text-8xl md:text-[200px] font-anton text-tertiary">{displaypath === "" ? "SPOTIFY" : displaypath}</h1>
            <div className="flex justify-center items-center bg-secondary w-screen h-screen">
                <div id="content" className="flex flex-col justify-center items-center opacity-0 p-2 gap-2 w-full md:w-2/4 h-3/5 md:h-2/4 bg-primary drop-shadow-xl text-tertiary">
                    {displaypath === "" && <Image src={SpotifyLogo} alt="Spotify Logo" className="h-3/4 w-3/4 animate-pulse " />}
                    {displaypath === "ABOUT" && <About />}
                    {displaypath === "UTILS" && <Utils />}
                    {displaypath === "SONG" && <Song />}
                    {displaypath === "ARTIST" && <Artist />}
                </div>
            </div>
            <h1 id="titlebot" className="fixed opacity-0 bottom-0 right-0 md:right-14 font-anton text-8xl md:text-[200px] text-tertiary">{displaypath === "" ? "UTILS" : displaypath}</h1>
        </main >
    )
}

