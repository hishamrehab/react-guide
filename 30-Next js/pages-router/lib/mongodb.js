import dns from 'dns';
import { MongoClient } from 'mongodb';

// Node on this machine is pointed at a local DNS resolver (127.0.0.1) that
// refuses SRV queries, so "mongodb+srv://" URIs fail with
// "querySrv ECONNREFUSED". Use public DNS servers for Node's lookups instead.
dns.setServers(['8.8.8.8', '1.1.1.1']);

export function connectToDatabase() {
  return MongoClient.connect(process.env.MONGODB_URI);
}
