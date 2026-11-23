// api/meetup
import { connectToDatabase } from '../../lib/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;


    const client = await connectToDatabase();
    const db = client.db();


    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
     
    client.close();
    console.log(result);

     res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;







