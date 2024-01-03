import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
	return (
		<html lang={lng} dir={dir(lng)}>
			<head />
			<body className={`${lng} `}>
				<Navbar lng={lng} className='mb-30' />
				{children}
				<Footer />
			</body>
		</html>
	);
}
