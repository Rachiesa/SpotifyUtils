"use client";
import { usePathname } from "next/navigation"


export default function page() {
    let a = usePathname().toUpperCase().slice(1);
    return (
        <main>
            <h1 className="fixed top-0 left-1 text-[200px] font-anton text-tertiary">{a}</h1>
            <section className="flex justify-center items-center bg-secondary w-screen h-screen">
                <div className="flex flex-col justify-start p-2 gap-2 w-2/4 h-2/4 bg-primary drop-shadow-xl text-tertiary">
                    <p className="font-trispace text-2xl w-3/5">HELLO, RACHIESA HERE!
                        THIS IS MY FIRST PROJECT,I LOVE LISTENING MUSIC WITH SPOTIFY.
                        MY GOALS IS
                        TO USE SPOTIFY API FOR EXPLORING NEW MUSIC. PLEASE ENJOY AND REPORT
                        IF SOMETHING WENT WRONG.</p>
                    <h2 className="underline font-anton text-3xl">THANKS!!!</h2>
                </div>
            </section>
            <h1 className="fixed bottom-0 right-14 font-anton text-[200px] text-tertiary">{a}</h1>
        </main >
    )
}
