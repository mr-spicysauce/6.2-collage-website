import Burger from "@/components/Burger"
import Menu from "@/components/Menu"
import Head from "next/head"
import { useState } from "react"

export default function MainHeader() {
    const [menu_open, set_menu_open] = useState(false)
    return (
        <>
            <Head>
                <title>Edset</title>
            </Head>
            <header id="header-style">
                <a id="button-work-plz" href="/">
                    <img
                        id="header-img"
                        height={80}
                        src="/assets/edset_logo.png"
                    />
                </a>
                <div id="header-text">
                    <a id="header-link" href="/">
                        <h1>Edset</h1>
                    </a>
                </div>
                <div id="burger-div">
                    <Burger set_open={set_menu_open} open={menu_open}></Burger>
                </div>
            </header>
            <div>
                <Menu open={menu_open}></Menu>
            </div>
        </>
    )
}
