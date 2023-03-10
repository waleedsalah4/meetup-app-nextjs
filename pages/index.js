import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
const user_Pass = process.env.NEXT_PUBLIC_UESER_PASS




function HomePage(props) {

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta 
          name='description' 
          content='Browse a huge list of highly active React meetups' 
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps(){
  // fetch data from an API
  const client = await MongoClient.connect(`mongodb+srv://${user_Pass}@cluster0.g8pdzal.mongodb.net/meetups?retryWrites=true&w=majority`)
  const db = client.db();

  const meetupCollections = db.collection('meetups');

  const meetups = await meetupCollections.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id:meetup._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default HomePage;