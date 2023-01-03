import MeetupList from '../components/meetups/MeetupList';

// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Adress 5, 1245 Some City',
    description: 'This a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Adress 10, 1245 Some City',
    description: 'This a second meetup',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Adress 15, 12545 Some City',
    description: 'This a Third meetup',
  }
]


function HomePage(props) {

  return (
    <MeetupList meetups={props.meetups} />
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
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default HomePage;