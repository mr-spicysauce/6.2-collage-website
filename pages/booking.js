import MainHeader from "@/components/main-header"

export default function Booking() {
    return (
        <>
            <MainHeader />

            <div id="main-container-booking">
                <div id="booking-header">
                    <img
                        height={"64px"}
                        width={"64px"}
                        src="/assets/book.png"
                    ></img>
                    <h1>BOOK US NOW!</h1>
                    <img
                        height={"64px"}
                        width={"64px"}
                        src="/assets/book.png"
                    ></img>
                </div>

                <form id="form">
                    <label className="form-lable">
                        Enter your name:
                        <input type="text" required />
                    </label>
                    <label className="form-lable">
                        Enter your phone number:
                        <input pattern="[0-9]{11}" type="text" required />
                    </label>
                    <label className="form-lable">
                        Enter your email:
                        <input type="email" required />
                    </label>
                    <label className="form-lable">
                        Enter a postcode:
                        <input
                            type="text"
                            required
                            pattern="([A-Za-z]{2}[0-9]{1,})( ?)([0-9]{1}[A-Za-z]{2})"
                        />
                    </label>
                    <label className="form-lable">
                        Enter a date:
                        <input type="date" required />
                    </label>
                    <button type="submit">Submit Booking Request</button>
                </form>
            </div>
        </>
    )
}
