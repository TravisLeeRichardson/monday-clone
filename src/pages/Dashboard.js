import TicketCard from "../components/TicketCard";

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Travis Richardson',
            avatar: 'https://i.imgur.com/RPZfFtT.jpg',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showcasing how to work with NFTs safely.',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'green',
            title: 'Make a video about making a bot',
            owner: 'Travis Richardson',
            avatar: 'https://i.imgur.com/RPZfFtT.jpg',
            status: 'working on it',
            priority: 3,
            progress: 20,
            description: 'Make a video showcasing how to work with NFTs safely.',
            timestamp: '2022-04-11T07:36:17+0000'
        },
        {
            category: 'Q3 2022',
            color: 'blue',
            title: 'Build a bot',
            owner: 'Travis Richardson',
            avatar: 'https://i.imgur.com/RPZfFtT.jpg',
            status: 'not started',
            priority: 4,
            progress: 30,
            description: 'Make a video showcasing how to work with NFTs safely.',
            timestamp: '2022-05-11T07:36:17+0000'
        }
    ]

    const uniqueCategories =  [
        //if tickets exist, then loop through all the ticket items, and get the category and return it. checking for uniqueness and assign using Set (Set only stores the unique items)
        ...new Set(tickets?.map(({category}) => category))
    ]
    console.log(uniqueCategories)
    return (
        /*This code is creating a dashboard for "My Projects" consisting of tickets grouped
        by unique categories. It first creates a containing div with a class name of "dashboard"
        and a header with the text "My Projects". It then creates a second div with a class name
        of "ticket-container". Inside this div, it uses the "&&" operator to check if the "tickets"
        array exists, and if it does, it maps over the "uniqueCategories" array, displaying each
        unique category as an h3 heading. For each category, it then uses the "filter" method to
        create a new array of tickets that match that category, and maps over that array to display
        each ticket as a "TicketCard" component. The "id" property of each "TicketCard" is set to
        the index of that ticket in the filtered array, and the "color" and "ticket" properties
        are set based on the data for that ticket.*/
        <div className ="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                        .map((filteredTicket, _index) => (
                        <TicketCard
                            id= {_index}
                            color={filteredTicket.color}
                            ticket= {filteredTicket}
                            />
                        ))
                    }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard