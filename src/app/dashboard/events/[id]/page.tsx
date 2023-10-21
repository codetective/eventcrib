import db from '@/utils/db';
import SingleEventViewComponent from '@/components/events/SingleEventViewComponent';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function SingleEvent({ params }: any) {
  const session: any = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  const event = await db.event.findUnique({ where: { id: params.id } });

  return (
    <div>
      <SingleEventViewComponent event={event} />
    </div>
  );
}

export default SingleEvent;
