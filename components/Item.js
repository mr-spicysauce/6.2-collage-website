export default function Item1({index, is_selected, event_name, event_image, set_current_event}) {
    return(
        <li onClick={() => set_current_event(index)} className={`event-item ${is_selected ? "event-item-selected" : ""}`}>
            <img width={100} height={60} src={event_image}></img>
            <h2>{event_name}</h2>
        </li>
    )
}