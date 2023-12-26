import React from "react";
import { useTranslation } from "../../i18n";

async function QuoteSC({ params: { lng } }) {
	const { t } = await useTranslation(lng, "quote");

	return (
		<section>
			<div className='grid grid-cols-1 lg:grid-cols-12 sm:pt-12'>
				<div className='col-span-7 place-self-center'>
					<h1 className='text-white mb-4 text-2xl lg:text-3xl font-semibold'>
						{t("quote")}
					</h1>

					<p className='text-[#ADB7BE] text-lg lg:text-xl'>
						{t("quote")}
					</p>
				</div>
			</div>
		</section>
	);
}

export default QuoteSC;
