import { Badge, Col, Grid, Group, Paper, Title } from '@mantine/core';
import React from 'react';
import { Card } from '../Card';

export const Specialty = () => {
  return (
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
            <Card />
          </Col>
          <Col span={4}>
            <Card />
          </Col>
          <Col span={4}>
            <Card />
          </Col>
        </Grid>
      </Paper>
    </Group>
  );
};
