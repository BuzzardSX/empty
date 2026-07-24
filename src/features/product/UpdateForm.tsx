import type { InputEventHandler } from 'react';

const UpdateForm = () => {
	const action = (formData: FormData) => {
		const product = Object.fromEntries(formData);

		console.log(product);
	};

	const inputHandler: InputEventHandler<HTMLInputElement> = (e) => {
		console.log(e.currentTarget.value);
	};

	return (
		<form action={action}>
			<input type='hidden' name='number' />
			<div>
				<label>Артикул</label>
				<input type='text' name='brandNumber' defaultValue={0} onInput={inputHandler} />
			</div>
			<div>
				<button type='submit'>Добавить</button>
			</div>
		</form>
	);
};

export default UpdateForm;
