import Item from "@/components/Item"
import MainHeader from "@/components/main-header"
import { useState } from "react"

var items = [
    {
        name: "Solaria",
        imgsrc: "/assets/event_image1.jpg",
    },
    {
        name: "Whimsical Woodlands",
        imgsrc: "/assets/event_image2.jpg",
    },
    {
        name: "Crystal Caverns",
        imgsrc: "/assets/event_image3.jpg",
    },
    {
        name: "Retro Road Trip",
        imgsrc: "/assets/event_image4.jpg",
    },
    {
        name: "Skyward Summit",
        imgsrc: "/assets/event_image5.jpg",
    },
]

export default function Home() {
    const [menu_open, set_menu_open] = useState(false)
    const [current_event, set_current_event] = useState(0)

    return (
        <>
            <MainHeader />

            <main className="main-container">
                <img id="main-image" src={items[current_event].imgsrc}></img>

                <div id="main-container2">
                    <div className="main-content-containter">
                        <h1 className="main-content-header">
                            {items[current_event].name}
                        </h1>

                        <text>
                            {" "}
                            The Solaria Festival was a three-day celebration of
                            solar energy and sustainability held in the heart of
                            the desert.
                        </text>
                        <text>
                            {" "}
                            Attendees came from all over the world to
                            participate in workshops, listen to expert panels,
                            and dance under the stars to the beat of
                            environmentally-conscious DJs.
                        </text>
                        <text>
                            {" "}
                            The festival grounds were powered entirely by solar
                            panels, and vendors served up organic, plant-based
                            meals. Solaria Festival was a shining example of how
                            festivals can have a positive impact on the planet.
                        </text>
                    </div>

                    <div className="main-content-containter">
                        <h1 className="main-content-header"> Past events</h1>

                        <ul id="event-list">
                            {items.map((item, index) => {
                                return (
                                    <Item
                                        index={index}
                                        event_name={item.name}
                                        event_image={item.imgsrc}
                                        is_selected={current_event == index}
                                        set_current_event={set_current_event}
                                    ></Item>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}
