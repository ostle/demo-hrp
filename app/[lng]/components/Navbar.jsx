import { useTranslation } from "../../i18n";

import Link from "next/link";
import React from "react";

import { LngSwitcher } from "./LngSwitcher";

const menuItems = [
	{ href: "/", text: "home" },
	{ href: "#services", text: "services" },
	{ href: "/clients", text: "clients" },
	{ href: "#contact", text: "contact" },
];

const Navbar = async ({ lng }) => {
	const { t } = await useTranslation(lng, "navbar");
	return (
		<nav className='fixed top-0 left-0 right-0 z-10 bg-opacity-90 shadow-lg bg-white'>
			<div className='flex flex-wrap items-center justify-between mx-auto'>
				<Link href={"/"} className='text-2x md:text-5xl font-semibold'>
					LOGO
				</Link>
				<div className='menu md:w-auto' id='navbar'>
					<ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 justify-between'>
						{menuItems.map((item, index) => (
							<li key={index}>
								<Link
									href={`/${lng}${item.href}`}
									className='block sm:mx-6 sm: px-4 sm:text-xl rounded md:p-0'
								>
									{t(item.text)}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<LngSwitcher lng={lng} />
			</div>
		</nav>
	);
};

export default Navbar;
