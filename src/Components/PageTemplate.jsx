"use client";
import { usePathname } from "next/navigation"
import About from "@/app/about/About";
import Utils from "@/app/utils/Utils";
import Song from "@/app/utils/.song/song";

export default function PageTemplate() {
    let a = usePathname().toUpperCase().split("/").length - 1;
    let displaypath = usePathname().toUpperCase().split("/")[a];
    return (
        <>
            <h1 className="fixed top-0 left-1 text-[200px] font-anton text-tertiary">{displaypath}</h1>
            <div className="flex justify-center items-center bg-secondary w-screen h-screen">
                <div className="flex flex-col justify-start p-2 gap-2 w-2/4 h-2/4 bg-primary drop-shadow-xl text-tertiary">
                    {displaypath === "ABOUT" && <About />}
                    {displaypath === "UTILS" && <Utils />}
                    {displaypath === ".SONG" && <Song />}
                </div>
            </div>
            <h1 className="fixed bottom-0 right-14 font-anton text-[200px] text-tertiary">{displaypath}</h1>
        </>
    )
}

// <p className="font-trispace text-2xl w-3/5">HELLO, RACHIESA HERE!
// THIS IS MY FIRST PROJECT,I LOVE LISTENING MUSIC WITH SPOTIFY.
// MY GOALS IS
// TO USE SPOTIFY API FOR EXPLORING NEW MUSIC. PLEASE ENJOY AND REPORT
// IF SOMETHING WENT WRONG.</p>
// <h2 className="underline font-anton text-3xl">THANKS!!!</h2>