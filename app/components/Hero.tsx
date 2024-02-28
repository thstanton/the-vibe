import Image from 'next/image'

export default function Hero() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <video
                playsInline
                autoPlay
                muted
                loop
                className="absolute z-10 h-screen object-cover"
            >
                <source src="/videos/neonPlaceholder.mp4" />
            </video>
            <div className="z-50 flex h-auto flex-col items-center justify-center gap-4 font-semibold">
                <Image
                    src="/images/vibe-logo.svg"
                    alt="The Vibe"
                    width={600}
                    height={400}
                />
                <h1 className="text-2xl text-slate-100 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                    Anger, Pain, Fear, Aggression...you should see what&apos;s for pudding!
                </h1>
                <button className="btn btn-secondary max-w-40">
                    Watch the promo
                </button>
            </div>
        </div>
    )
}
