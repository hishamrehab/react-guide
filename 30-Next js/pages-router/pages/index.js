import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_MEETUPS } from '../data/dummy-meetups';

    function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
    }
 
    export async function getStaticProps() {
        return {
            props: {
            meetups: DUMMY_MEETUPS
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
 