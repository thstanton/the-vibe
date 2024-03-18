import Image from 'next/image'
import Link from 'next/link'

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
                <source src="/videos/vibeLoop.mp4" />
            </video>
            <div className="z-20 flex w-full h-auto flex-col items-center justify-center gap-8 font-semibold">
                <Image
                    src="/images/vibe-logo.svg"
                    alt="The Vibe"
                    width={400}
                    height={200}
                />
                <h1 className="font-subtitle text-xl md:text-3xl text-slate-100 text-center px-8">
                    Roaming brass band bringing the energy to your events
                </h1>
                <Link href="#video">
                    <button className="font-subtitle btn max-w-40 border-none bg-[#EB4A98] text-white">
                        Watch the promo
                    </button>
                </Link>
            </div>
        </div>
    )
}
