import { HomeAddUserButton, HomeAddUserModal } from '~/features/home';
import { UserDescriptions } from '~/widgets';

const Page = () => {
	return (
		<div>
			<HomeAddUserButton type='primary' />
			<HomeAddUserModal />
			<UserDescriptions />
		</div>
	);
};

export default Page;
