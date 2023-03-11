import { db } from '@/api/db';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production')
    return res.status(401).json({ message: 'Cannot run SEED in Production' });

  // db
  await db.connect();

  await db.disconnect();

  res.status(200).json({ message: 'Successful' });
}
