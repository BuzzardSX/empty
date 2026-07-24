const UpdateForm = () => {
	const action = (formData: FormData) => {
		const product = Object.fromEntries(formData);

		console.log(product);
	};

	return (
		<form action={action}>
			<input type='hidden' />
			<div>
				<label>Артикул</label>
				<input name='number' type='text' />
			</div>
			<div>
				<button type='submit'>Добавить</button>
			</div>
		</form>
	);
};

export default UpdateForm;
