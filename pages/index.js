import Item from "@/components/Item"
import MainHeader from "@/components/main-header"
import { useState } from "react"

var items = [
    {
        name: "Event Name 1",
        imgsrc: "/assets/event_image1.jpg"
    },
    {
        name: "Event Name 2",
        imgsrc: "/assets/event_image2.jpg"
    },
    {
        name: "Event Name 3",
        imgsrc: "/assets/event_image3.jpg"
    },
    {
        name: "Event Name 4",
        imgsrc: "/assets/event_image1.jpg"
    },
    {
        name: "Event Name 5",
        imgsrc: "/assets/event_image1.jpg"
    }
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

                <h1 className="main-content-header">{items[current_event].name}</h1>


                <text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis justo non nibh pulvinar consectetur. Nunc vitae neque eros.</text>
                <text> Proin vulputate accumsan tortor eu egestas. Duis ut auctor diam. Cras vehicula libero non porta ullamcorper. Etiam posuere iaculis sodales.</text>
                <text> Quisque lacinia vulputate egestas. In eu tempus dolor, ut viverra turpis. Donec vitae aliquet augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</text>
                <text> Donec lobortis pretium urna, sit amet semper ipsum fermentum vel. Sed a laoreet ligula. Suspendisse ipsum. </text>

                </div>

               <div className="main-content-containter">

               <h1 className="main-content-header"> Past events</h1>

                <ul id="event-list">

                    {items.map((item,index) => {
                        return(
                            <Item index={index} event_name={item.name} event_image={item.imgsrc} is_selected={current_event == index} set_current_event={set_current_event}></Item>
                        )
                    })}

                </ul>

                </div>
                
                </div>
            </main>
        </>
    )
}
