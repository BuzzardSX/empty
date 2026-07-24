const UpdateForm = () => (
	<form>
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

export default UpdateForm;
