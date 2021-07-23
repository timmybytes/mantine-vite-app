import { Group, Paper, Title } from '@mantine/core';
import React from 'react';
import { Form } from '../Form';

export const Contact = () => {
  return (
    <Group position='apart' style={{ marginBottom: 20 }}>
      <Paper shadow='md' padding='xl' style={{ width: '100%' }}>
        <Title order={2} style={{ margin: '1rem 0' }} id='contact'>
          Contact
        </Title>
        <Form />
      </Paper>
    </Group>
  );
};
