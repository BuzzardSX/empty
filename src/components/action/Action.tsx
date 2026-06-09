interface Props {
	onClick: () => {};
}

const Action = (props: Props) => (
	<button {...props}>Click me</button>
);

export default Action;
