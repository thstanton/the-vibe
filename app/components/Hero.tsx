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
                poster="/videos/vibe-loop-placeholder.png"
            >
                <source src="/videos/vibeLoop.mp4" />
            </video>
            <div className="z-20 flex h-full w-full flex-col items-center justify-center gap-8 bg-slate-900/50 font-semibold">
                <Image
                    src="/images/neon-logo-2.svg"
                    alt="The Vibe"
                    width={400}
                    height={200}
                />
                <h1 className="px-8 text-center font-subtitle text-xl text-slate-100 md:text-3xl">
                    Roaming brass band bringing the energy!
                </h1>
                <Link href="#video">
                    <button className="btn max-w-40 border-none bg-[#EB4A98] font-subtitle text-white">
                        See us in action
                    </button>
                </Link>
            </div>
        </div>
    )
}
