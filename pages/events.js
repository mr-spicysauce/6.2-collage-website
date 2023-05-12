import MainHeader from "@/components/main-header"

export default function Booking() {
    return (
        <>
            <MainHeader />
            <div id="main-container-events">
                <h1>Upcoming Events!</h1>

                <div id="events">
                    <div className="item">
                        <h1 className="item-header">Event Name 1</h1>
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus egestas lectus vitae nulla condimentum
                            fringilla. Mauris rhoncus ullamcorper nisl, eget
                            hendrerit dui faucibus in.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-header">Event Name 2</h1>
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus egestas lectus vitae nulla condimentum
                            fringilla. Mauris rhoncus ullamcorper nisl, eget
                            hendrerit dui faucibus in.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-header">Event Name 3</h1>
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus egestas lectus vitae nulla condimentum
                            fringilla. Mauris rhoncus ullamcorper nisl, eget
                            hendrerit dui faucibus in.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-header">Event Name 4</h1>
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus egestas lectus vitae nulla condimentum
                            fringilla. Mauris rhoncus ullamcorper nisl, eget
                            hendrerit dui faucibus in.
                        </text>
                    </div>

                    <div className="item">
                        <h1 className="item-header">Event Name 5</h1>
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus egestas lectus vitae nulla condimentum
                            fringilla. Mauris rhoncus ullamcorper nisl, eget
                            hendrerit dui faucibus in.
                        </text>
                    </div>
                </div>
            </div>
        </>
    )
}
