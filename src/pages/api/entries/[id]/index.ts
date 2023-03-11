import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

import { db, EntryModel } from '@/api/db';
import { Entry } from '@/interfaces';

type HandlerData = { message: string } | Entry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerData>
) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id))
    return res.status(400).json({ message: 'Invalid ID: ' + id });

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);

    default:
      return res.status(400).json({ message: 'Invalid request' });
  }
}

const updateEntry = async (
  req: NextApiRequest,
  res: NextApiResponse<HandlerData>
) => {
  const { id } = req.query;
  const { description, status } = req.body;

  try {
    await db.connect();

    const updatedEntry = await EntryModel.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    if (!updatedEntry)
      return res
        .status(404)
        .json({ message: `Entry with ID: '${id}' not found` });

    await db.disconnect();

    res.status(200).json(updatedEntry!);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    res.status(500).json({ message: 'Something went wrong' });
  }
};