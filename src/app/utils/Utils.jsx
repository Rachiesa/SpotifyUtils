"use client";
import React from 'react'
import { gsap } from "gsap";
export default function Utils() {
    async function anim() {
        let rtl = gsap.timeline({})
        await rtl.to("#titletop", { duration: 2, x: -500, opacity: 0 }, 0)
            .to("#titlebot", { duration: 2, x: 500, opacity: 0 }, 0)
            .to("#content", { duration: 2.5, x: -500, opacity: 0 }, 0);
        window.location.pathname = "/utils/song";
    }
    async function anim2() {
        let rtl = gsap.timeline({})
        await rtl.to("#titletop", { duration: 2, x: -500, opacity: 0 }, 0)
            .to("#titlebot", { duration: 2, x: 500, opacity: 0 }, 0)
            .to("#content", { duration: 2.5, x: -500, opacity: 0 }, 0);
        window.location.pathname = "/utils/artist";
    }
    return (
        <main className="flex flex-col items-start w-full h-full font-anton gap-3 text-3xl">
            <button onClick={anim}>RANDOM.SONG</button >
            <button onClick={anim2}>RANDOM.ARTIST</button >
        </main>
    )
}
