import type { Meta, StoryObj } from '@storybook/react';
import { default as HomeAddUserButton } from './HomeAddUserButton';

const meta: Meta<typeof HomeAddUserButton> = {
	component: HomeAddUserButton
};

export const primary: StoryObj<typeof HomeAddUserButton> = {
	args: {
		primary: true
	}
};

export default meta;
