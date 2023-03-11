import type { NextApiRequest, NextApiResponse } from 'next';

import { db, EntryModel, IEntryModel } from '@/api/db';

type HandlerData = { message: string } | IEntryModel[] | IEntryModel;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerData>
) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);

    default:
      return res.status(400).json({ message: 'Invalid request' });
  }
}

// traditional way, without serverProps of SSR
const getEntries = async (res: NextApiResponse<HandlerData>) => {
  await db.connect();
  const entries = await EntryModel.find().sort({ createdAt: 'asc' });
  await db.disconnect();

  return res.status(200).json(entries);
};
