import MainHeader from "@/components/main-header"

export default function Event() {
    return (
        <>
            <MainHeader />
            <div className="main-container-events">
                <h1>Upcoming Events!</h1>

                <div className="events">
                    <div className="item">
                        <h1 className="item-events-header">Aurora Nights</h1>
                        <text>
                            The Aurora Nights Festival is an upcoming
                            celebration of the Northern Lights, set to take
                            place in the Arctic Circle. Attendees will stay in
                            cozy cabins and igloos, surrounded by the
                            breathtaking beauty of the aurora borealis. During
                            the day, they can go dog sledding or snowmobiling,
                            and at night, they'll gather around campfires to
                            hear stories and music inspired by the folklore of
                            the Arctic. The festival will also feature expert
                            talks and workshops on astronomy and climate change.
                            The Aurora Nights Festival is a unique opportunity
                            to witness one of the world's most stunning natural
                            wonders.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-events-header">Urban Oasis</h1>
                        <text>
                            The Urban Oasis Festival is an upcoming event that
                            aims to bring a taste of the tropics to the heart of
                            the city. The festival will feature lush greenery,
                            colorful flowers, and water features, creating a
                            peaceful oasis in the middle of the urban hustle and
                            bustle. Attendees can relax in hammocks, try their
                            hand at terrarium-building, or take a guided
                            meditation class. The festival will also feature
                            live music and DJs, as well as food and drink
                            vendors serving up tropical treats. The Urban Oasis
                            Festival is a chance to escape the city without ever
                            leaving it.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-events-header">Digital Dreams</h1>
                        <text>
                            The Digital Dreams Festival is an upcoming
                            celebration of the intersection between music and
                            technology. Attendees will step into a virtual
                            world, where they can explore interactive
                            installations and attend performances by
                            cutting-edge electronic musicians. The festival will
                            feature live coding workshops, augmented reality
                            experiences, and a hackathon where attendees can
                            create their own digital instruments. The Digital
                            Dreams Festival is a chance to experience the future
                            of music and technology.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-events-header">Oceanic Odyssey</h1>
                        <text>
                            The Oceanic Odyssey Festival is an upcoming event
                            that celebrates the majesty of the ocean and its
                            inhabitants. Attendees will board a luxury yacht and
                            sail to different coastal destinations, where they
                            can participate in whale-watching tours, snorkeling
                            adventures, and beach cleanups. The festival will
                            feature talks by marine biologists and
                            conservationists, as well as workshops on marine art
                            and photography. The Oceanic Odyssey Festival is a
                            chance to connect with the beauty and power of the
                            ocean.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-events-header">
                            Gastronomical Gathering
                        </h1>
                        <text>
                            The Gastronomical Gathering Festival is an upcoming
                            event that celebrates the art of food and drink.
                            Attendees can sample dishes from top chefs and
                            mixologists, attend cooking classes and tastings,
                            and learn about the history and culture of different
                            cuisines. The festival will feature a marketplace
                            where attendees can purchase artisanal products, as
                            well as talks and workshops on sustainable food
                            practices. The Gastronomical Gathering Festival is a
                            chance to indulge in the pleasures of food and drink
                            while also learning about the importance of
                            sustainability.
                        </text>
                    </div>
                </div>
            </div>
        </>
    )
}
