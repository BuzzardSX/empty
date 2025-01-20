import { Provider } from 'react-redux';
import Page from '../Page';
import store from './store';

const Root = () => (
	<Provider store={store}>
		<Page />
	</Provider>
);

export default Root;
