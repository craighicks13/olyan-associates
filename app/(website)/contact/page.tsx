import ContactForm from '@/components/ContactForm';
import { Container } from '@/components/Container';

export default function ContactPage() {
	return (
		<>
			<Container className="my-24">
				<h1 className="text-center">Contact Us</h1>
				<div className="prose max-w-none">
					<p>
						To contact us, please fill out the form below and we will
						get back to you as soon as possible.
					</p>
				</div>
				<div className="mt-8">
					<ContactForm />
				</div>
			</Container>
		</>
	);
}
