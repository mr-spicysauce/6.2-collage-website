import { Facebook } from "@/components/icons/Facebook"
import { Instagram } from "@/components/icons/Instagram"
import { Twitter } from "@/components/icons/Twitter"
import { YouTube } from "@/components/icons/YouTube"
import MainHeader from "@/components/main-header"
import { useState } from "react"

export default function ContactUs() {
    const [menu_open, set_menu_open] = useState(false)
    return (
        <>
            <MainHeader />

            <main id="main-container">
                <h1 className="contact-us">CONTACT US!!!</h1>
                <div id="contain-top">
                    <div className="item-header">
                        <h1 className="item-header">By Email</h1>

                        <div className="item">
                            <img
                                height={"64px"}
                                width={"64px"}
                                src="/assets/mail.png"
                            ></img>
                            <h1>BandName@Gmail.com</h1>
                        </div>
                    </div>

                    <div className="item-header">
                        <h1>By Phone</h1>

                        <div className="item">
                            <img
                                height={"64px"}
                                width={"64px"}
                                src="/assets/phone_emoji.png"
                            ></img>
                            <h1>+44 1632 960424</h1>
                        </div>
                    </div>
                </div>

                <h1 className="contact-us">Follow us on social media!</h1>

                <div id="socials-container">
                    <a href="https://www.instagram.com/">
                        <Instagram />
                    </a>

                    <a href="https://www.twitter.com/">
                        <Twitter />
                    </a>

                    <a href="https://www.facebook.com/">
                        <Facebook />
                    </a>

                    <a href="https://www.youtube.com/">
                        <YouTube />
                    </a>
                </div>
            </main>
        </>
    )
}
