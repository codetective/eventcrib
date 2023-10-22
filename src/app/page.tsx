import { getRecentEvents } from '@/actions/actions';
import Banner from '@/components/home/Banner';
import CategoryGrid from '@/components/home/CategoriesGrid';
import HowItWorks from '@/components/home/HowItWorks';
import Newsletter from '@/components/home/Newsletter';
import RecentEvents from '@/components/home/RecentEvents';
import MainLayout from '@/components/layout/MainLayout';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export async function generateMetadata() {
  const session: any = await getServerSession(authOptions);
  return {
    title: 'Welcome to EvhentCrib - Web3 event management system',
    description: `first web3 integrated event management system`,
  };
}

export default async function Home() {
  const events = await getRecentEvents();
  return (
    <MainLayout>
      <Banner />
      <HowItWorks />
      <RecentEvents events={events} />
      <CategoryGrid />
      <Newsletter />
    </MainLayout>
  );
}
