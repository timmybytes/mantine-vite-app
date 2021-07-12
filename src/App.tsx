import { Button } from '@mantine/core';
import React from 'react';
import './App.css';
import bookIso from './books.svg';
import Layout from './components/Layout/Layout';

export default function App() {
  // TODO: Add params to pass to the layout components
  return (
    <Layout>
      {/* TODO: Move css to a separate file */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: 2,
          maxWidth: '600px',
        }}>
        <h1>A new way to do things</h1>
        <p style={{ fontSize: '1.25rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          expedita sit iusto atque aliquam sunt excepturi?
        </p>
        <Button size='md' color='violet'>
          Start Now
        </Button>
      </div>

      <img
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '200px',
          right: '25%',
          top: '29%',
          position: 'absolute',
          zIndex: 1,
          opacity: 0.8,
        }}
        src={bookIso}
        alt='alt'
      />
    </Layout>
  );
}
