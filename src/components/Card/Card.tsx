import {
  Badge,
  Button,
  Card as MantineCard,
  Group,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';

export const Card = () => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div
      style={{ minWidth: 240, maxWidth: 300, width: '100%', margin: 'auto' }}>
      <MantineCard
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
      </MantineCard>
    </div>
  );
};
