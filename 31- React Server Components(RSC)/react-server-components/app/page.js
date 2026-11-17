// import ServerActionsDemo from './components/ServerActionsDemo';
import { Suspense } from 'react';
import UsePromiseDemo from './components/UsePromisesDemo';

export default async function Home() {
        const fetchUsersPromise = new Promise((resolve) => setTimeout(resolve, 2000));
    setTimeout(async () => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data);
    }, 2000);
  
  return (
    <main>
    <Suspense fallback={<p>Loading users...</p>}> 
      <UsePromiseDemo users={fetchUsersPromise} />
    </Suspense>
    </main>
  );
}
