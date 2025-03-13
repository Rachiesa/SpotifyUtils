'use client';
import React from 'react'
import { usePathname } from "next/navigation"
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Nav() {
    let a = usePathname().toUpperCase().split("/")[1];
    const [path, setPath] = React.useState();

    // gsap animation 
    async function animHome() {
        let rtl = gsap.timeline({})
        await rtl.to("#titletop", { duration: 2, x: -1000, opacity: 0 }, 0)
            .to("#titlebot", { duration: 1, x: 1000, opacity: 0 }, 0)
            .to("#content", { duration: 2, x: -500, opacity: 0 }, 0);
        window.location.pathname = "";
    }
    async function animAbout() {
        let rtl = gsap.timeline({})
        await rtl.to("#titletop", { duration: 1, x: -1000, opacity: 0 }, 0)
            .to("#titlebot", { duration: 1, x: 1000, opacity: 0 }, 0)
            .to("#content", { duration: 2, x: -500, opacity: 0 }, 0);
        window.location.pathname = "/about";
    }
    async function animUtils() {
        let rtl = gsap.timeline({})
        await rtl.to("#titletop", { duration: 1, x: -1000, opacity: 0 }, 0)
            .to("#titlebot", { duration: 1, x: 1000, opacity: 0 }, 0)
            .to("#content", { duration: 2, x: -500, opacity: 0 }, 0);
        window.location.pathname = "/utils";
    }

    return (
        <nav className="flex gap-5 justify-end text-tertiary font-anton">
            {a !== "" ? <button className="animate-none" onClick={animHome} >/HOME</button> : <button className="animate-pulse">/HOME</button>
            }
            {a !== "ABOUT" ? <button className="animate-none" onClick={animAbout} >/ABOUT</button> : <button className="animate-pulse">/ABOUT</button>}
            {a !== "UTILS" ? <button className="animate-none" onClick={animUtils} >/UTILS</button> : <button className="animate-pulse">/UTILS</button>}
        </nav >
    )
}
