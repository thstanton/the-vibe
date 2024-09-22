import Hero from './components/Hero'
import VideoPlayer from './components/VideoPlayer'
import Bio from './components/Bio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import PhotoGallery from './components/PhotoGallery'
import Repertoire from './components/Repertoire'

export default function Home() {
    return (
        <main className="bg-slate-900">
            <Hero />
            <div className="flex w-full flex-col md:flex-row">
                <VideoPlayer />
                <Bio />
            </div>
            <PhotoGallery />
            <Repertoire />
            <div className="flex w-full flex-col items-center justify-center md:flex-row">
                {/* <Testimonials /> */}
                <Contact />
            </div>
        </main>
    )
}
