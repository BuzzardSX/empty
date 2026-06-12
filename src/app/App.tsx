import { useId } from 'react';
import { Home } from '../pages';

const App = () => {
	const id = useId();
	console.log('App id', id);

	return <Home />;
}

export default App;
