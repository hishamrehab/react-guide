  import MeetupDetail from '../../components/meetups/MeetupDetail';
  import { ObjectId } from 'mongodb';
  import { connectToDatabase } from '../../lib/mongodb';
  import { Fragment } from 'react';
  import Head from 'next/head';


  function MeetupDetails(props) { 
    return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
        <MeetupDetail
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </Fragment>
    );
  }

  export async function getStaticPaths() {
    const client = await connectToDatabase();
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetups = await meetupsCollection
      .find({}, { projection: { _id: 1 } })
      .toArray();
      client.close();

      return {
        paths: selectedMeetups.map((meetup) => ({
          params: { meetupId: meetup._id.toString() },
        })),
        fallback: 'blocking',
      };
    }

  export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await connectToDatabase();
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({
      _id: new ObjectId(meetupId),
    });

    client.close();

    return {
      props: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    };
  } 


export default MeetupDetails;
