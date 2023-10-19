'use server';

export type EventData = {
  attendees: number;
  end_date: string;
  event_desc: string;
  event_info: string;
  event_name: string;
  event_type: string;
  location: string;
  price: number;
  start_date: string;
  time: string;
  user_address: string;
  website: string;
  banner: string;
  category: string;
  id?: string;
};

import db from '@/utils/db';

export async function createEventInDB(data: EventData) {
  const {
    attendees,
    end_date,
    event_desc,
    event_info,
    event_name,
    event_type,
    location,
    price,
    start_date,
    time,
    user_address,
    website,
    banner,
    category,
  } = data;
  try {
    const res = await db.event.create({
      data: {
        attendees,
        end_date,
        event_desc,
        event_info,
        event_name,
        event_type,
        location,
        price,
        start_date,
        time,
        user_address,
        website,
        banner,
        category,
      },
    });

    return res.id;
  } catch (error) {
    console.log(error);

    return null;
  }
}
