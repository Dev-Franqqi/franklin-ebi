'use client'
import Meteors from "@/components/ui/meteors"
import { DockDemo } from "./Dockdemo"
import SlightFlip from "@/components/ui/flip-text"
import HyperText from "@/components/ui/hyper-text"
import WordPullUp from "@/components/ui/word-pull-up"
import BlurFade from "@/components/ui/blur-fade"
import useDark from "./hooks/useDark"
import OrbitingCircles from "@/components/ui/orbiting-circles"
export default function page(){
  const {dark} =useDark()
  return(
    <div className={dark?"dark":""}>

  <BlurFade className="h-screen dark:bg-black dark:text-white pt-30 w-screen overflow-x-hidden">

    <div className="md:[70%] lg:w-[40%] px-10 mx-auto py-10 h-full ">

    

      <Meteors number={30} />
    
    <BlurFade delay={0.25} inView>

      <WordPullUp className="text-5xl text-left mt-10 font-bold" words="Hi, I'm Franklin" />

    </BlurFade>
    <BlurFade className="font-semibold text-3xl" delay={0.28} inView>
      Full Stack Developer
    </BlurFade>
    <BlurFade className="mt-10" delay={0.31} inView>
    <h2 className="font-semibold text-2xl">About</h2>
    <p className="text-sm font-normal">
    I&apos;m a full-stack web developer and software engineer with a passion for creating dynamic, user-friendly applications using modern technologies like Next.js, React, and NestJS. I specialize in building intuitive interfaces and scalable backends, combining creativity with a strong technical foundation. With a background in Computer Science and a commitment to continuous learning, I love solving complex problems and turning ideas into functional, efficient solutions.
    </p>
    </BlurFade>

  <DockDemo />

  {/* <BlurFade delay={0.34} className="mt-20" inView>
    <h3 className="font-semibold text-2xl">Skills</h3>

    <OrbitingCircles />
    
  </BlurFade> */}
  </div>



  </BlurFade>




  
  </div>
  )
}