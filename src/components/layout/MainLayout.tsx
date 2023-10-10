import React, { ReactNode } from 'react';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';

type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => (
  <div>
    <Navbar />
    <main className='min-h-[80vh]'>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
