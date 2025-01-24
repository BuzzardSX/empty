import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		userModalOpen: false
	},
	reducers: {
		showUserModal: (state) => {
			state.userModalOpen = true;
		},
		hideUserModal: (state) => {
			state.userModalOpen = false;
		}
	},
	selectors: {
		selectUserModalOpen: (state) => state.userModalOpen
	}
});

export const { showUserModal } = homeSlice.actions;
export const { selectUserModalOpen } = homeSlice.selectors;

export default homeSlice;
