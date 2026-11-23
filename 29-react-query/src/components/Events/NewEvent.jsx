import { Link, useNavigate } from 'react-router-dom';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from "@tanstack/react-query"
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { quertClinet } from '../../util/http.js';
export default function NewEvent() {
  const navigate = useNavigate();
  
  const {  mutate , isPending  , isError  , error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      quertClinet.inValidateQueries({queryKey: ['events'] , exact: true}),
     navigate("/events")
    }
  });

   function handleSubmit(formData) {
     mutate({
      event: formData
     });
     navigate();
   }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
        )}
      </EventForm>
      {isError && 
       <ErrorBlock title="Failed To create Event" message={error.info?.message ||
         "Failed To Create Event. Please check your inputs and try again later. "}/>}
    </Modal>
  );
}
