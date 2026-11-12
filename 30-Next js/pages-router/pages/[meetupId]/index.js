import MeetupDetail from '../../components/meetups/MeetupDetail';
import { DUMMY_MEETUPS } from '../../data/dummy-meetups';

 function MeetupDetails(props) { 
  return (
    <MeetupDetail
      image={props.image}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  );
 }

 export function getStaticPaths() {
  return {
    paths: DUMMY_MEETUPS.map((meetup) => ({
      params: { meetupId: meetup.id },
    })),
    fallback: false,
  };
 }

  export function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    return { props: { id: meetupId } };
  } 


export default MeetupDetails;
