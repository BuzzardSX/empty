const BrandUpdateForm = () => (
	<form onSubmit={(...args) => console.log(...args)}>
		<div>
			<input name='name' type="text" />
		</div>
		<div>
			<button type='submit' />
		</div>
	</form>
);

export default BrandUpdateForm;
