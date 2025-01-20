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
	}
});

const { showUserModal } = homeSlice.actions;

export { showUserModal };
export default homeSlice;
