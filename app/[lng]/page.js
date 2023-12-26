import { useTranslation } from "../i18n";
import "./globals.css";

import HeroSection from "./components/HeroSection";
import Separator from "./components/Separator";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng, "home");
	return (
		<main className='flex min-h-screen flex-col mx-auto'>
			<HeroSection params={{ lng }} />
			<Separator sectionTitle='services' params={{ lng }} />
			<Services params={{ lng }} />
			<Separator sectionTitle='contact' params={{ lng }} />
			<ContactForm params={{ lng }} />
		</main>
	);
}
