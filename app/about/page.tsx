import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<iframe
				className="mt-5"
				src="https://faizhaidar.substack.com/embed"
				width={480}
				height={150}
			></iframe>
		</div>
	);
}
