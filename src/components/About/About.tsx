import { Group, Paper, Text, Title } from '@mantine/core';
import React from 'react';

export const About = () => {
  return (
    <Group>
      <Paper shadow='md' padding='xl'>
        <Title order={2} style={{ margin: '1rem 0' }} id='about'>
          About
        </Title>
        <Text style={{ margin: '1rem 0' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          itaque esse consequuntur, ratione quidem voluptatem corrupti, sed
          consectetur vero, repudiandae at a amet nihil aut ducimus fugiat.
          Eligendi, iure quo.
        </Text>
        <Text style={{ margin: '1rem 0' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt
          aperiam ut, provident accusamus reprehenderit laboriosam recusandae.
          Autem eius accusamus a recusandae sed, quidem illo. Assumenda
          cupiditate esse voluptas praesentium.
        </Text>
        <Text style={{ margin: '1rem 0' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptates, doloremque eveniet atque exercitationem dolores vel natus
          ipsam? Omnis nesciunt maxime, illo ab repudiandae modi dolor iure
          doloribus assumenda tenetur?
        </Text>
      </Paper>
    </Group>
  );
};
