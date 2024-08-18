import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      return res.status(500).json({ error: 'MongoDB URI is not defined' });
    }

    try {
      const client = await MongoClient.connect(mongoURI);
      const db = client.db();
      const users = await db.collection('subscriptions').find().toArray();
      client.close();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error connecting to database' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}