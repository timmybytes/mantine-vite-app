import {
  Anchor,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Group,
  Image,
  Input,
  InputWrapper,
  Paper,
  SegmentedControl,
  Text,
  Textarea,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react';
import './App.scss';

function CardExample() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div
      style={{ minWidth: 240, maxWidth: 300, width: '100%', margin: 'auto' }}>
      <Card
        shadow=''
        style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <Image
          src='https://source.unsplash.com/random/160'
          height={160}
          alt='Norway'
        />

        <Group position='apart' style={{ marginBottom: 5 }}>
          <Text weight={500}>Custom Order</Text>
          <Badge color='green' variant='light'>
            Available
          </Badge>
        </Group>

        <Text size='sm' style={{ color: secondaryColor }}>
          Professional services that are professional and services.
        </Text>

        <Button
          variant='outline'
          color='blue'
          fullWidth
          style={{ marginTop: 10 }}>
          Get a quote
        </Button>
      </Card>
    </div>
  );
}

interface NavLinks {
  name: string;
  link: string;
}

const links: NavLinks[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Specialty',
    link: '#specialty',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

export default function App() {
  const isMobile = useMediaQuery('(max-width: 755px)');
  const span = isMobile ? 12 : 4;
  const [value, setValue] = useState('general');
  return (
    <>
      <Container size={950}>
        <Group direction={isMobile ? 'column' : 'row'}>
          <Paper
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: '3rem 0',
              width: '100%',
              alignItems: 'center',
            }}>
            <Title order={1}>trademarq</Title>
            <nav>
              <ul
                style={{
                  listStyleType: 'none',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  padding: 0,
                  margin: 0,
                }}>
                {links.map(({ name, link }, idx) => (
                  <li key={idx}>
                    <Anchor
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                      href={link}>
                      {name}
                    </Anchor>
                  </li>
                ))}
              </ul>
            </nav>
          </Paper>
        </Group>
        <Group style={{}}>
          <Paper shadow='md' padding='xl'>
            <Title order={2} style={{ margin: '1rem 0' }} id='about'>
              About
            </Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              itaque esse consequuntur, ratione quidem voluptatem corrupti, sed
              consectetur vero, repudiandae at a amet nihil aut ducimus fugiat.
              Eligendi, iure quo.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sunt aperiam ut, provident accusamus reprehenderit laboriosam
              recusandae. Autem eius accusamus a recusandae sed, quidem illo.
              Assumenda cupiditate esse voluptas praesentium.
            </Text>
          </Paper>
        </Group>
        <Group>
          <Paper shadow='md' padding='xl'>
            <Title order={2} style={{ margin: '1rem 0' }} id='specialty'>
              Specialty
            </Title>
            <Group position='left' style={{ margin: '20 0' }} grow>
              <Badge variant='dot' size='xl' color='blue'>
                Development
              </Badge>
              <Badge variant='dot' size='xl' color='red'>
                Design
              </Badge>
              <Badge variant='dot' size='xl' color='green'>
                Copywriting/Editing
              </Badge>
              <Badge variant='dot' size='xl' color='yellow'>
                Music/Scoring
              </Badge>
            </Group>
            <Grid justify={'center'}>
              <Col span={4}>
                <CardExample />
              </Col>
              <Col span={4}>
                <CardExample />
              </Col>
              <Col span={4}>
                <CardExample />
              </Col>
            </Grid>
          </Paper>
        </Group>
        <Group position='apart' style={{ marginBottom: 20 }}>
          <Paper shadow='md' padding='xl' style={{ width: '100%' }}>
            <Title order={2} style={{ margin: '1rem 0' }} id='contact'>
              Contact
            </Title>
            <SegmentedControl
              value={value}
              onChange={setValue}
              data={[
                { label: 'General', value: 'general' },
                { label: 'Booking', value: 'booking' },
                { label: 'Collaborate', value: 'collaborate' },
              ]}
              style={{ marginBottom: 20 }}
            />
            <InputWrapper
              id='input-name'
              // TODO: Separate aria-hidden label
              label='Your name'
              description='Enter a name'
              style={{ marginBottom: 20 }}>
              <Input id='input-demo' placeholder='Your email' />
            </InputWrapper>
            <InputWrapper
              id='input-email'
              // TODO: Separate aria-hidden label
              label='Your email'
              description="Please enter a valid email address. We don't spam, but we don't do bots either."
              // error='This email is not valid'
              required
              style={{ marginBottom: 20 }}>
              <Input id='input-demo' placeholder='Your email' />
            </InputWrapper>
            <Textarea
              placeholder='Be the ball, throw yourself.'
              label='Your message'
              required
              style={{ marginBottom: 20 }}
            />
            <Button
              variant='light'
              color={value === 'general' ? 'green' : 'red'}
              style={{ marginBottom: 20 }}
              disabled={value === 'general' ? false : true}>
              Submit
            </Button>
          </Paper>
        </Group>
      </Container>
    </>
  );
}
