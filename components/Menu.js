export default function Menu({ open }) {
    return (
        <div className={open ? "burger-menu open" : "burger-menu"}>
            <a>Upcoming events</a>

            <a>Contact us</a>

            <a>Book us</a>

            <a>About us</a>
        </div>
    )
}
