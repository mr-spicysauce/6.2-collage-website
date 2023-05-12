export default function Menu({ open }) {
    return (
        <div className={open ? "burger-menu open" : "burger-menu"}>
            <a>
            <img height={"64px"} width={"64px"} src="/assets/calendar.png"></img>
                Upcoming events
                </a>

            <a href="/contact-us">
                <img height={"64px"} width={"64px"} src="/assets/phone_emoji.png"></img>
                Contact us
                </a>

            <a>
            <img height={"64px"} width={"64px"} src="/assets/book.png"></img>
                Book us
                </a>

            <a>
            <img height={"64px"} width={"64px"} src="/assets/question_mark.png"></img>
                About us
                </a>
        </div>
    )
}
