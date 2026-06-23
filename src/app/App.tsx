import { MainLayout } from '../layouts';
import { About, Home } from '../pages';
import { useState } from 'react';

const App = () => {
	const [state] = useState<1 | 2>(1);

	return (
		<MainLayout>
			{state == 1 ? <Home /> : null}
			{state == 1 ? <About /> : null}
		</MainLayout>
	);
}

export default App;
