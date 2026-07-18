import { RouterProvider , createBrowserRouter  } from 'react-router-dom';
import EventsPage , {loader as eventsLoader} from './pages/Events';
import HomePage from './pages/Home';
import EventDetailPage from './pages/EventDetail';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import {loader as eventDetailLoader, action as eventDetailAction } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import {action as manipulateEventAction } from './components/EventForm';


const router = createBrowserRouter([
  {
   path: '/',
   element: <RootLayout /> ,
   errorElement: <ErrorPage />,
   children: [
      { index:true, element: <HomePage /> },
      { path: 'events', element: <EventsRootLayout />, 
        children: [
      { index:true, element: <EventsPage /> ,  loader : eventsLoader },
      {  path : ":eventId" , id: "event-detail", loader : eventDetailLoader 
        ,children: [
        { index: true, element: <EventDetailPage />  ,
         action : manipulateEventAction },
        { path: 'edit', element: <EditEventPage /> }
      ]
    },
      { path: 'new', element: <NewEventPage /> , action : manipulateEventAction },
    ] },
  ]
 },
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
