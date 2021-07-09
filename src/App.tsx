import { Button, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState<string>()

    const form = useForm({
      initialValues: {
      name: '',
      termsOfService: false,
    },
  });

  return (
    <div className="App">
      <main className='container'>
        <Title>Form</Title>
        {user && <>
          <p>Welcome, <strong>{user}</strong>!</p>
          <Button onClick={() => setUser('')}>Clear User</Button>
        </>}
        <form onSubmit={form.onSubmit((values) => {
          console.log(values);
          setUser(values.name)
        })}>

      <TextInput
        label="Name"
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
      />

      <Button type="submit">Submit</Button>
    </form>
      </main>
    </div>
  )
}

export default App
