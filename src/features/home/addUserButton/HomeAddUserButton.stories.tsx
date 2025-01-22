import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '~/app';
import { default as HomeAddUserButton } from './HomeAddUserButton';

const meta: Meta<typeof HomeAddUserButton> = {
	component: HomeAddUserButton,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
};

export const primary: StoryObj<typeof HomeAddUserButton> = {
	args: {
		type: 'primary'
	}
};

export default meta;
