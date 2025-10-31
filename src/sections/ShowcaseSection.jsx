import React, { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = ( ) => {

    const sectionRef = useRef(null)
    const crumblRef = useRef(null)
    const millowRef = useRef(null)
    const dappRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )

        const cards = [crumblRef.current, millowRef.current, dappRef.current]

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {y: 50, opacity: 0},
                {y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), 
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
    }, [])

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/**LEFT */}
                    <div ref={crumblRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/Crumbl.png" alt="Crumbl" />
                        </div>
                        <div className="text-content">
                            <h2>Crumbl Cookies NFT Voting</h2>
                            <p className="text-white-50 md:text-xl">A Dapp application inspired by the famous Crumbl Cookies. Head over to place a vote for your favorite cookie!</p>
                        </div>
                    </div>

                    {/**RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={millowRef}>
                            <div className="image-wrapper bg-[#7e589cff]">
                                <img 
                                    src="/images/Millow.png"
                                    alt="Property purchasing platform" 
                                    
                                />
                            </div>
                            <h2>Millow</h2>
                            <p className="text-white-50 md:text-xl">A Dapp for purchasing Real Estate that uses Solidity and Metamask.</p>
                        </div>

                        <div className="project" ref={dappRef}>
                            <div className="image-wrapper bg-[#666666]">
                                <img src="/images/sauce.png"  />
                            </div>
                            <h2>QA-Automation</h2>
                            <p className="text-white-50 md:text-xl">A showcase of automated UI and API testing using Playwright, following QA best practices.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection