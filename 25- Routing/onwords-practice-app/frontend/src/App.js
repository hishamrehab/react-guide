import { RouterProvider , createBrowserRouter  } from 'react-router-dom';

import EventsPage from './pages/Events';
import HomePage from './pages/Home';
import EventDetailPage from './pages/EventDetail';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
h

const router = createBrowserRouter([
  { path: '/',
   element: <RootLayout /> ,
   children: [
      { index:true, element: <HomePage /> },
      { path: 'events', element: <EventsRootLayout />, 
      children: [
      { index:true, element: <EventsPage /> ,
         loader : async () => {
        const response = await fetch('http://localhost:8080/events');
        if (!response.ok) {
          throw new Error('Fetching events failed.');
        }else {
          const resData = await response.json();
          return resData.events;
        }
    
      } },
      { path: ':eventId', element: <EventDetailPage /> },
      { path: 'new', element: <NewEventPage /> },
      { path: ':eventId/edit', element: <EditEventPage /> }
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
