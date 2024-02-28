import Hero from './components/Hero'
import VideoPlayer from './components/VideoPlayer'
import Bio from './components/Bio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

export default function Home() {
    return (
        <main className='bg-slate-950'>
            <Hero />
            <div className='flex w-full md:flex-row flex-col'>
                <VideoPlayer />
                <Bio />
            </div>
            <div className='flex w-full md:flex-row flex-col'>
                <Testimonials />
                <Contact />
            </div>
        </main>
    )
}
