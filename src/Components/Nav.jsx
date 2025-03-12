'use client';
import { usePathname } from "next/navigation"
export default function Nav() {
    let a = usePathname().toUpperCase().split("/")[1];
    return (
        <nav className="flex gap-5 justify-end text-tertiary font-anton">
            {a !== "" ? <a className="animate-none" href="/">/HOME</a> : <a className="animate-pulse">/HOME</a>}
            {a !== "ABOUT" ? <a className="animate-none" href="/about">/ABOUT</a> : <a className="animate-pulse">/ABOUT</a>}
            {a !== "UTILS" ? <a className="animate-none" href="/utils">/UTILS</a> : <a className="animate-pulse">/UTILS</a>}
        </nav >
    )
}
