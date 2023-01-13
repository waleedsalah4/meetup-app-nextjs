import Head from "next/head"
import { MongoClient,ObjectId } from "mongodb"
import MeetupDetails from "../../components/meetups/MeetupDetails"
const user_Pass = process.env.NEXT_PUBLIC_UESER_PASS

function MeetupDetailsPage(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta 
                    name='description' 
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetails 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
        
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(`mongodb+srv://${user_Pass}@cluster0.g8pdzal.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
  
    const meetupCollections = db.collection('meetups');
    const meetups = await meetupCollections.find({}, {_id: 1}).toArray();//get all meetps ids
    client.close()
    return {
        fallback: false,
        paths: meetups.map(meetup => ({ 
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context){
    //fetch data for a songle meetup
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(`mongodb+srv://${user_Pass}@cluster0.g8pdzal.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
  
    const meetupCollections = db.collection('meetups');
    const selectedMeetup = await meetupCollections.findOne({_id: ObjectId(meetupId)})
    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            }
        }
    }
}

export default MeetupDetailsPage