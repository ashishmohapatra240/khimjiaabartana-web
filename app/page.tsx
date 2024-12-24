import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%]">
          <HeroSection />
        </div>
        <div className="w-full lg:w-[40%] relative">
          <VideoSection />
        </div>
      </div>
    </main>
  )
}
