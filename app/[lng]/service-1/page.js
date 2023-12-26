import React from "react";
import { useTranslation } from "../../i18n";

async function ServiceDetail({ params: { lng, serviceId } }) {
	const { t } = await useTranslation(lng, "services1");

	const serviceData = {
		title: t("title-1"),
		paragraph1: t("description-1"),
		list: [
			{
				title: t("list-item-1-title"),
				description: t("list-item-1-description"),
			},
			{
				title: t("list-item-2-title"),
				description: t("list-item-2-description"),
			},
			{
				title: t("list-item-3-title"),
				description: t("list-item-3-description"),
			},
		],
		paragraph2: t("paragraph-2"),
	};

	return (
		<section className='bg-gray-200 pt-20 pb-10 min-h-screen flex items-center justify-center mt-[-20px]'>
			<div className='max-w-screen-lg bg-white p-8 rounded-md'>
				<h2 className='text-3xl font-bold text-sky-900 mb-4'>
					{serviceData.title}
				</h2>
				<p className='text-black text-justify mb-4'>
					{serviceData.paragraph1}
				</p>

				<ul className='list-disc pl-6 mb-4'>
					{serviceData.list.map((item, index) => (
						<li key={index}>
							<h3 className='text-lg font-bold mb-2'>
								{item.title}
							</h3>
							<p className='text-black text-justify'>
								{item.description}
							</p>
						</li>
					))}
				</ul>

				<p className='text-black text-justify'>
					{serviceData.paragraph2}
				</p>
			</div>
		</section>
	);
}

export default ServiceDetail;
