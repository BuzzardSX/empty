import { HomeAddUserButton, HomeAddUserModal } from '~/features/home';
import { UserDescriptions } from '~/widgets/user';

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
