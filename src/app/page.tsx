import Banner from '@/components/home/Banner';
import CategoryGrid from '@/components/home/CategoriesGrid';
import HowItWorks from '@/components/home/HowItWorks';
import Newsletter from '@/components/home/Newsletter';
import MainLayout from '@/components/layout/MainLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to EvhentCrib - Web3 event management system',
};

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <HowItWorks />
      {/* recent events section goes here */}
      <CategoryGrid />
      <Newsletter />
    </MainLayout>
  );
}
