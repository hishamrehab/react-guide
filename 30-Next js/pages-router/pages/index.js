import MeetupList from '../components/meetups/MeetupList';
import { connectToDatabase } from '../lib/mongodb';
import Head from 'next/head';


    function HomePage(props) {
    return (
      <>
      <Head>
        <title>Meetups</title>
        <meta 
        name="description" 
        content="Browse a huge list of highly active meetups!" 
      />
      </Head>
      <MeetupList meetups={props.meetups} />
      </>
    )
    }
 
    export async function getStaticProps() {
     
      const client = await connectToDatabase();
      const db = client.db();
      
      
      const meetupsCollection = db.collection('meetups');
      const meetups = await meetupsCollection.find().toArray();
      client.close();

      return {
            props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
          },
          revalidate: 10, 
        }
     }

    // export async function getServerSideProps(context) {
    //     const req = context.req;
    //     const res = context.res;
 
    //   return {
    //     props: {
    //         meetups: DUMMY_MEETUPS
    //    },
    //     // revalidate: 1
    //   }    
    // }


    export default HomePage;
 