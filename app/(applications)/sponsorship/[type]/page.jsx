export default function page({ params }) {
	const { type } = params

	return <div>{type}</div>
}
