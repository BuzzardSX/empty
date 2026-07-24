const UpdateForm = () => {
	const action = (formData: FormData) => {
		const product = Object.fromEntries(formData);

		console.log(product);
	};

	return (
		<form action={action}>
			<input type='hidden' name='number' />
			<div>
				<label>Артикул</label>
				<input type='text' name='brandNumber' />
			</div>
			<div>
				<button type='submit'>Добавить</button>
			</div>
		</form>
	);
};

export default UpdateForm;
