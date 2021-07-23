import { Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import './App.scss';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Specialty } from './components/Specialty';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 755px)');
  const span = isMobile ? 12 : 4;

  return (
    <>
      <Container size={950}>
        <Header />
        <About />
        <Specialty />
        <Contact />
      </Container>
    </>
  );
}
