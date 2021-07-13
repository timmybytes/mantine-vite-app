import { Button } from '@mantine/core';
import React from 'react';
import './App.css';
import bookIso from './books.svg';
import Layout from './components/Layout/Layout';

export default function App() {
  // TODO: Add params to pass to the layout components
  return (
    <Layout>
      <div className='layout__content'>
        <h1>A new way to do things</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          expedita sit iusto atque aliquam sunt excepturi?
        </p>
        <Button size='md' color='violet'>
          Start Now
        </Button>
      </div>
      <img className='layout__cover' src={bookIso} alt='alt' />
    </Layout>
  );
}
