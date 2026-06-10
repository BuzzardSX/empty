import { useId } from 'react';
import Page from '../Page';

const App = () => {
	const id = useId();
	console.log('App id', id);

	return <Page />;
}

export default App;
