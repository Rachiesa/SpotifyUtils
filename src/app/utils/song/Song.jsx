import React from 'react'
import Image from 'next/image'
import SpotifyLogo from "../../../../public/SpotifyLogo.svg"
export default function Song() {
    const [tracks, setTracks] = React.useState("Song");
    const [image, setImage] = React.useState("");
    const [artist, setArtist] = React.useState("artist");
    const [link, setLink] = React.useState("");
    const [album, setAlbum] = React.useState("album");
    const fetchData = async () => {
        try {
            let list = Math.round(Math.random() * 5)
            const res = await fetch("/api/fetch", { method: "POST" });
            const result = await res.json();
            setTracks(result.tracks.tracks?.items[list]?.name);
            setImage(result.tracks.tracks?.items[list]?.album.images[0]?.url);
            setAlbum(result.tracks.tracks?.items[list]?.album.name);
            setArtist(result.tracks.tracks?.items[list]?.artists[0]?.name);
            setLink(result.tracks.tracks?.items[list]?.external_urls?.spotify);
            console.log(result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <main className='flex flex-col h-full w-full items-center gap-2'>
            {image === undefined || image === "" ? <Image src={SpotifyLogo} className='h-1/2 w-1/4 border-tertiary ' alt='SpotifyCover' /> : <img src={image} className='h-1/2 w-2/4 border-4 border-tertiary ' />}
            <h1 className='flex font-anton text-auto w-full justify-center'>{tracks?.toUpperCase()}</h1>
            <h3 className='font-trispace text-auto'>{album?.toUpperCase()}</h3>
            <h2 className='font-anton text-auto'>{artist?.toUpperCase()}</h2>
            {link && <a href={link} target='_blank' className='font-anton text-xl'>PLAY ON SPOTIFY</a>}
            <button onClick={() => fetchData()} className='font-anton text-3xl bg-tertiary text-secondary p-2 fixed md:top-[35%] md:left-[-10%] top-[93%] left-0 animate-pulse'>Generate</button>
        </main>
    )
}
