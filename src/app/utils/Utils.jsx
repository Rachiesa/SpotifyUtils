"use client";
import React from 'react'
import { gsap } from "gsap";
export default function Utils() {
    async function anim() {
        let rtl = gsap.timeline({})
        await rtl.to("#titletop", { duration: 1, x: -1000, opacity: 0 }, 0)
            .to("#titlebot", { duration: 1, x: 1000, opacity: 0 }, 0)
            .to("#content", { duration: 2, x: -500, opacity: 0 }, 0);
        window.location.pathname = "/utils/song";
    }
    return (
        <main className="flex flex-col w-full h-full font-anton gap-3 text-3xl">
            <a onClick={anim}>RANDOM.SONG</a>
        </main>
    )
}
