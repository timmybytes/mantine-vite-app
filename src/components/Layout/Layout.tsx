import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

export default function Layout({ children }: { children: any }) {
  return (
    <div className='layout'>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
