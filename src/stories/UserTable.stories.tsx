import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import users from './defaultUsersData.json';
import {UserTable} from '../components/UserTable/UserTable';

export default {
  title: 'Example/UserTable',
  component: UserTable,
} as ComponentMeta<typeof UserTable>;

const Template: ComponentStory<typeof UserTable> = (args) => <UserTable {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  users: []
};

export const ApiExample = Template.bind({});
ApiExample.args = {
  users: users
};
