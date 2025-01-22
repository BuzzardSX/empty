import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '~/app';
import { default as HomeAddUserModal } from './HomeAddUserModal';

const meta: Meta<typeof HomeAddUserModal> = {
	component: HomeAddUserModal,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
};

export const primary: StoryObj<typeof HomeAddUserModal> = {};

export default meta;
