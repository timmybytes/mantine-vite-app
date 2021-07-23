import { Anchor, Group, Paper, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

const LINKS = [
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

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 755px)');
  return (
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
            {LINKS.map(({ name, link }, idx) => (
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
  );
};
