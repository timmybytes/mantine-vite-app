import {
  Accordion,
  AccordionItem,
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  Modal,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import React, { useState } from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import './App.css';

interface ToggleTypes {
  colorOne: string;
  colorTwo: string;
  variant: 'light' | 'filled' | 'outline' | 'link';
}

function Toggle({ colorOne, colorTwo, variant }: ToggleTypes) {
  const [value, toggle] = useToggle(colorOne, [colorOne, colorTwo]);

  return (
    <Button variant={variant} color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}

function PopUp({
  isOpen,
  children,
  title,
}: {
  isOpen: boolean;
  children: any;
  title: string;
}) {
  const [opened, setOpened] = useState(isOpen);
  return (
    <Modal opened={opened} onClose={() => setOpened(false)} title={title}>
      {children}
    </Modal>
  );
}

const tracklist: string[] = [
  'Quagmire',
  'Tabs On Your Insides',
  'In Your Crime',
  'Mammoth & The Rage',
  'Thumper',
  'Nova Lady Ache',
  'And Come Undone',
  'Trepidation Highway',
  'Simulacrum I',
  'Southsea Hants',
  'Wear Their Hunger & Their Haunt',
];

const Examples = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Container>
        <Paper padding='xl' shadow='xl'>
          <Title>Paper is the most basic ui component</Title>
          <Image
            src='https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
            height={400}
          />
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Accordion>
          <AccordionItem label='Simulacra'>
            <Group direction='row' spacing='sm'>
              <Card shadow='sm'>
                <Image
                  src='https://i2.wp.com/animalpolitik.org/wp-content/uploads/2021/05/Simulacra-Cover.png?resize=2048%2C2048&ssl=1'
                  height={400}
                  width={400}
                  alt='Norway'
                />
                <Group position='apart' style={{ marginBottom: 5 }}>
                  <Text weight={800}>Simulacra</Text>
                  <Badge color='green' variant='light'>
                    Free or Pay What You Want
                  </Badge>
                </Group>
                <Text size='sm' style={{ color: '#3c3c3c' }}>
                  The newest album from Animal Politik is available now.
                </Text>

                <Button
                  variant='light'
                  color='blue'
                  fullWidth
                  style={{ marginTop: 10 }}
                  onClick={() => setVisible(true)}>
                  Get the Album
                </Button>
              </Card>
              <Modal
                opened={visible}
                onClose={() => setVisible(false)}
                title='BUY'>
                <Card>
                  <Text weight={700} size='sm'>
                    Tracklist
                  </Text>
                  {tracklist.map((track, idx) => (
                    <Text size='sm'>
                      {idx + 1}. {track}{' '}
                      <a href='#'>
                        <FiArrowDownCircle />
                      </a>
                    </Text>
                  ))}
                </Card>
              </Modal>
              <Card></Card>
            </Group>
          </AccordionItem>
          <AccordionItem label='Fait Accompli'>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </AccordionItem>
        </Accordion>
      </Container>
      ;
    </>
  );
};

export default Examples;
