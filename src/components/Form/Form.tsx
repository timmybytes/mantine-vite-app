import {
  Button,
  Input,
  InputWrapper,
  Modal,
  Paper,
  SegmentedControl,
  Text,
  Textarea,
} from '@mantine/core';
import * as EmailValidator from 'email-validator';
import React, { useState } from 'react';

export const Form = () => {
  const [value, setValue] = useState('general');
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [opened, setOpened] = useState(false);

  const CONTACT_CATEGORIES = [
    { label: 'General', value: 'general' },
    { label: 'Hire Us', value: 'hire' },
    { label: 'Collaborate', value: 'collaborate' },
  ];
  return (
    <Paper>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={CONTACT_CATEGORIES}
        style={{ marginBottom: 20 }}
      />
      <InputWrapper
        id='input-name'
        label='Name'
        description='What should we call you?'
        style={{ marginBottom: 20 }}>
        <Input
          id='input-name'
          placeholder='E.g., Bob'
          value={nameValue}
          // @ts-ignore
          onChange={e => setNameValue(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper
        id='input-email'
        label='Email'
        description="Please enter a valid email address. We don't spam, but we don't do bots either."
        error={
          EmailValidator.validate(emailValue)
            ? ''
            : 'Please enter a valid email address'
        }
        required
        style={{ marginBottom: 20 }}>
        <Input
          id='input-demo'
          placeholder='someone@something.com '
          value={emailValue}
          // @ts-ignore
          onChange={e => setEmailValue(e.target.value)}
        />
      </InputWrapper>
      <Textarea
        label='Message'
        required
        error={!textValue && 'Required'}
        style={{ marginBottom: 20 }}
        value={textValue}
        // @ts-ignore
        onChange={e => setTextValue(e.target.value)}
      />
      <Button
        variant='light'
        color={value === 'general' ? 'green' : 'red'}
        style={{ marginBottom: 20 }}
        disabled={value === 'general' ? false : true}
        onClick={() => setOpened(true)}>
        Submit
      </Button>
      {opened && (
        <Modal
          opened={opened}
          onClose={() => {
            setTextValue('');
            setValue('');
            setNameValue('');
            setEmailValue('');
            setOpened(false);
          }}
          title={nameValue ? <h1>Thanks, {nameValue}!</h1> : <h1>Thanks!</h1>}
          closeButtonLabel='Close authentication modal'>
          <Text style={{ marginBottom: '1rem' }}>
            We'll get back to you as soon as we can.
          </Text>
          <Text style={{ marginBottom: '1rem' }}>
            In the meantime, you can check our FAQ for more information, or see
            what we do in our showcase.
          </Text>
        </Modal>
      )}
    </Paper>
  );
};
