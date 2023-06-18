import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";
import {Link} from "react-router-dom"; //allows us to link to somewhere else

const TicketCard = ({color, ticket}) => {
    console.log("TicketCard")
    return (
        <div className= "ticket-card">
            <div className = "ticket-color"></div>
                <Link to={`/ticket/${ticket.documentId}`} id="link">
                <h3>{ticket.title}</h3>
                <AvatarDisplay/>
                <StatusDisplay/>
                <PriorityDisplay/>
                <ProgressDisplay/>
                </Link>
            <DeleteBlock/>
        </div>
    )
}

export default TicketCard