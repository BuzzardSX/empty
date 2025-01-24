import { HomeAddUserButton, HomeAddUserModal } from '~/features/home';
import { OperdayDatePicker } from '~/widgets/operday';
import { UserDescriptions } from '~/widgets/user';

const Page = () => {
	return (
		<div>
			<div>
				<OperdayDatePicker />
			</div>
			<HomeAddUserButton type='primary' />
			<HomeAddUserModal />
			<UserDescriptions />
		</div>
	);
};

export default Page;
