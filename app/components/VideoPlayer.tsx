import React from 'react'

export default function VideoPlayer() {
    return (
        <div
            id="video"
            className="flex w-full flex-col items-center justify-center p-8 text-slate-100"
        >
            <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/WyaGEiMMClA?si=twO2wy0stpi_tCIp"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}
