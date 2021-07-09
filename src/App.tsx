import { Accordion, AccordionItem, Button, Container, Group, Paper, Text } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import React from 'react';
import './App.css';

const tracklist: string[] = ['Quagmire', 'Tabs On Your Insides', 'In Your Crime', 'Mammoth & The Rage', 'Thumper', 'Nova Lady Ache', 'And Come Undone', 'Trepidation Highway', 'Simulacrum I', 'Southsea Hants', 'Wear Their Hunger & Their Haunt']

interface ToggleTypes {
  colorOne: string,
  colorTwo: string,
  variant: 'light' | 'filled' | 'outline' | 'link'
}

function Toggle({colorOne, colorTwo, variant}: ToggleTypes) {
  const [value, toggle] = useToggle(colorOne, [colorOne, colorTwo]);

  return (
    <Button variant={variant} color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}

function App() {
  return (
      <Container>
        <Paper padding="xl" shadow="sm">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that require background with shadow
          </Text>
        </Paper>
        <Accordion>
          <AccordionItem label="Simulacra">
            <Group direction='column'>
            {tracklist.map((track, idx) => <Text size='sm'>{idx + 1}. {track}</Text>)}
            </Group>
          </AccordionItem>
          <AccordionItem label="Fait Accompli">
            Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
          </AccordionItem>
        </Accordion>
      </Container>
  )
}

export default App;
