import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper = (args: React.ComponentProps<typeof Modal>) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <div id='modal' />
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <h2>Пример модального окна</h2>
        <p>Здесь можно разместить любой контент.</p>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />
};
