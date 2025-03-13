'use client';
import React from 'react'

export default function Transiton({ children }) {
    const [displayChildren, setDisplayChildren] = React.useState(children);
    return (
        <div>
            {displayChildren}
        </div>
    )
}
