import MeetupDetails from "../../components/meetups/MeetupDetails"
function MeetupDetailsPage(props) {
    return (
        <MeetupDetails 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
            title="A First Meetup"
            address="5st freedom, old city"
            description="The meetup description"
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1'
                }
            },
            { 
                params: {
                    meetupId: 'm2'
                }
            },
            { 
                params: {
                    meetupId: 'm3'
                }
            }
        ]
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId
    console.log(meetupId)
    //fetch data for a songle meetup

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                title: "A First Meetup",
                address: "5st freedom, old city",
                description: "The meetup description"
            }
        }
    }
}

export default MeetupDetailsPage