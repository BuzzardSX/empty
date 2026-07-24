const BrandUpdateForm = () => {
	const action = (formData: FormData) => {
		const data = Object.fromEntries(formData);

		console.log('data', data);
	};

	return (
		<form action={action}>
			<div>
				<input name='name' type='text' />
			</div>
			<div>
				<button type='submit'>Send</button>
			</div>
		</form>
	);
};

export default BrandUpdateForm;
