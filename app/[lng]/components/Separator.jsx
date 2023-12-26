import React from "react";
import { useTranslation } from "../../i18n";

async function Separator({ params: { lng }, sectionTitle }) {
	const { t } = await useTranslation(lng, "separator");

	return (
		<section id={sectionTitle}>
			<div className='bg-white py-6 text-sky-900 text-center shadow-md'>
				<div className='text-2xl font-bold'>{`${t(sectionTitle)}`}</div>
			</div>
		</section>
	);
}

export default Separator;
