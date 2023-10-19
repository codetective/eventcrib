import db from '@/utils/db';
import SingleEventViewComponent from '@/components/events/SingleEventViewComponent';

async function SingleEvent({ params }: any) {
  const event = await db.event.findUnique({ where: { id: params.id } });

  return (
    <div>
      <SingleEventViewComponent event={event} />
    </div>
  );
}

export default SingleEvent;
