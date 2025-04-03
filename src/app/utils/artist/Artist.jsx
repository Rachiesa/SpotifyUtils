"use client";
import React from 'react'
import Image from 'next/image'
import SpotifyLogo from "../../../../public/SpotifyLogo.svg"
import { gsap } from "gsap";
export default function Song() {
    const [followers, setFollowers] = React.useState("FOLLOWERS");
    const [image, setImage] = React.useState(undefined);
    const [artist, setArtist] = React.useState("artist");
    const [link, setLink] = React.useState("spotify.com");
    const [genre, setGenre] = React.useState("genre");
    const fetchData = async () => {
        try {
            let list = Math.round(Math.random() * 5)
            const res = await fetch("/api/fetchartist", { method: "POST" });
            const result = await res.json();
            setArtist(result.tracks.artists?.items[list]?.name);
            setFollowers(result.tracks.artists?.items[list]?.followers.total);
            setImage(result.tracks.artists?.items[list]?.images[0]?.url);
            setGenre(result.tracks.artists?.items[list]?.genres[0]);
            setLink(result.tracks.artists?.items[list]?.external_urls?.spotify);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    // gsap animation



    async function playsandfetch() {
        const stl = gsap.timeline();
        await stl.to("#cover", { delay: 0.6, duration: 1, x: -40, opacity: 0 }, 0)
            .to("#sover", { delay: 0.5, duration: 1, x: 40, opacity: 0 }, 0)
            .to("#song", { delay: 0.4, duration: 1, x: -40, opacity: 0 }, 0)
            .to("#album", { delay: 0.3, duration: 1, x: 40, opacity: 0 }, 0)
            .to("#artist", { delay: 0.2, duration: 1, x: -40, opacity: 0 }, 0)
            .to("#link", { delay: 0.1, duration: 1, x: 40, opacity: 0 }, 0);
        await fetchData();
        stl.reverse();

    }
    function hidden() {
        if (image === undefined) {
            return " hidden"
        }
        else {
            return ""
        }
    }
    function block() {
        if (image === undefined) {
            return ""
        }
        else {
            return " hidden"
        }
    }

    return (
        <main className='flex flex-col h-full w-full items-center gap-2'>
            <Image id='sover' src={SpotifyLogo} className={'h-1/2 w-1/4 border-tertiary' + block()} alt='SpotifyCover' />
            <img id='cover' src={image} className={'h-1/2 w-2/4 md:w-1/4 border-4 border-tertiary ' + hidden()} />
            <h1 id='song' className='flex font-anton text-sm w-full justify-center'>{artist?.toUpperCase()}</h1>
            <h3 id='album' className='font-trispace text-auto'>{followers}</h3>
            <h2 id='artist' className='font-anton text-auto'>{genre?.toUpperCase()}</h2>
            <button id='link' onClick={() => window.open(link)} className='font-anton text-xl'>OPEN ON SPOTIFY</button>
            <button onClick={() => playsandfetch()} className='font-anton text-3xl bg-tertiary text-secondary p-2 fixed md:top-[35%] md:left-[-10%] top-[93%] left-0 animate-pulse'>Generate</button>
        </main>
    )
}
