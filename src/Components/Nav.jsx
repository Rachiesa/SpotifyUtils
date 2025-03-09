'use client';

export default function Nav() {
    return (
        <div className="flex gap-5 justify-end text-tertiary font-anton">
            <div onClick={() => { window.location.href = "/" }}>/HOME</div>
            <div onClick={() => { window.location.href = "about" }}>/ABOUT</div>
            <div onClick={() => { window.location.href = "utils" }}>/UTILS</div>
        </div >
    )
}
