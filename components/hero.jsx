"use client"
import React, { useRef,useEffect } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { StarsBackground } from './ui/stars-background'
import { ShootingStars } from './ui/shooting-stars'

function HeroSection() {
    const imageRef = useRef(null)
    useEffect(() => {
        const imageElement = imageRef.current;
        const handelScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled")
            }else{
                imageElement.classList.remove("scrolled")
            }
        }
        window.addEventListener('scroll',handelScroll);
        return () => window.removeEventListener('scroll',handelScroll)

    }, [])
    return (
        <section className='w-full pt-36 md:pt-48 pb-10'>
            <StarsBackground/>
            <ShootingStars />
            <div className='space-y-10 text-center'>
                <div className='space-y-4 mx-auto'>
                    <h1 className='gradient-title text-5xl font-bold md:text-r=6xl lg:text-7xl xl:text-8xl'>Elevate Your Career <br />
                        - The AI Way  </h1>
                    <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>Take your career to the next level with personalized guidance, interview coaching,
                        and AI-driven tools for job success.</p>
                </div>

                <div className='flex justify-center space-x-4'>
                    <Link href={"/dashboard"}>
                        <Button size="lg" className="px-8 cursor-pointer" >Get Started</Button>
                    </Link>
                    <Link href={"https://visionary-two.vercel.app/"}>
                        <Button size="lg" className="px-8 cursor-pointer" variant="outline">Get Started</Button>
                    </Link>
                </div>

               <div className='hero-image-wrapper mt-5 md:mt-0'>
                    <div ref={imageRef} className='hero-image'>
                        <Image src={"/banner.jpg"} className='rounded-lg shadow-2xl border mx-auto' width={900} height={120}  priority alt="Dashboard Preview" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection