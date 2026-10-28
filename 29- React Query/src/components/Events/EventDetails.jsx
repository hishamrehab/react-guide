import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header.jsx';
import { useQuery , useMutation } from '@tanstack/react-query';
import { fetchEvent , deleteEvent , queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';


export default function EventDetails() {
  const [isDeleting ,setIsDeleting ] = useState();
  const params = useParams();
  const navigate =  useNavigate();
    const {data , isPending , isError, error } = useQuery({
      queryKey: ['events' , params.id],
      queryFn : ({signal}) => fetchEvent({signal , id : params.id }),
    });

  const {
       mutate ,
       isPending: isPendingDeletion ,
       isErrorDeletion ,
       error:  deleteError } = useMutation({
      mutationFn: deleteEvent,
      onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none'
      })
      navigate("/events")
    }
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

   function handleDelete() {
        mutate({
          id: params.id
        });  
   }

    let content;
    if(isPending) {
      content = (
        <div id="event-details-content" className='center'>
          <p>Fetching Event data...</p>
        </div>
      )
    }

  if(isError) {
    content   = (
      <div id='event-details-content' className='center'>
      <ErrorBlock title="failed to load Event" message={
        error.info?.message ||
        "Failed To Fetch Event Data , Please try again later."}/>
    </div>
    )
  }

  if(data) {
    const formattedData = new Date(data.dete).toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });



  content = (
    <>
      <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          
        <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`${formattedData}T${data.time}`}>{data.date} @ {data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
    </>
  )
 }

  return (
    <>
      {isDeleting && (
          <Modal onClose={handleStopDelete}>
            <h2>Are You Sure?</h2>
            <p>Do you really wnat to delete this event? this action can not be undone.</p>
            <div className='form-actions'>
              {isPendingDeletion && <p> Deleting , please wait...</p>}
              {!isPendingDeletion && (
                  <>
                <button onClick={handleStopDelete} className='button-text' >Cancel</button>
                <button onClick={handleDelete} className='button'>Delete</button>
                  </>
              ) 
              }
            </div>
            {isErrorDeletion && (<ErrorBlock  title="Failed To delete event"  
                message={ deleteError.info?.message ||
                "Failed To delete event.please trt again later" }/>)}
          </Modal>
  )} 
          <Outlet />
            <Header>
              <Link to="/events" className="nav-item">
                View all Events
              </Link>
            </Header>
            <article id="event-details">
            {content}
            </article>
    </>
  );
}
