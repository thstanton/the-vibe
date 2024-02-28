import React from 'react'

export default function VideoPlayer() {
    return (
        <div className="flex w-full flex-col items-center justify-center p-8 text-slate-100">
            <video controls>
                <source src="/videos/neonPlaceholder.mp4" />
            </video>
        </div>
    )
}
