import { HomeAddUserButton, HomeAddUserModal } from '~/features/home';

const Page = () => {
	return (
		<div>
			<HomeAddUserButton type='primary' />
			<HomeAddUserModal />
		</div>
	);
};

export default Page;
