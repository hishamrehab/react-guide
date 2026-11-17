// import ServerActionsDemo from './components/ServerActionsDemo';
import { Suspense } from 'react';
import UsePromiseDemo from './components/UsePromisesDemo';
import ErrorBoundary from './components/ErrorBoundary';

export default async function Home() {
        const fetchUsersPromise = new Promise( 
          (resolve , reject ) => setTimeout(async () => {
            const data = await fs.readFile('dummy-db.json', 'utf-8');
            const users = JSON.parse(data);
            resolve(users)
            reject(new Error("Error"))
        }, 2000));
        

      
  return (
    <main>
      <ErrorBoundary fallback={<p>Something went Wrong!</p>}>
       <Suspense fallback={<p>Loading users...</p>}> 
          <UsePromiseDemo users={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
