import MainHeader from "@/components/main-header"
import { useState } from "react"

export default function ContactUs() {
    const [menu_open, set_menu_open] = useState(false)
    return(
        <>

            <MainHeader />

            <main id="main-container">
                <h1 id="contact-us">CONTACT US!!!</h1>
                <div id="contain-top">
                    <div className="item">
                        <img height={"64px"} width={"64px"} src="/assets/phone_emoji.png"></img>
                        <h1>+44 1632 960424</h1>
                    </div>

                    <div className="item">
                        <img height={"64px"} width={"64px"} src="/assets/mail.png"></img>
                        <h1>BandName@Gmail.com</h1>
                    </div>
                </div>

                </main>

        </>
    )
}