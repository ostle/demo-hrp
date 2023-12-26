import React from "react";
import { useTranslation } from "../../i18n";
import Image from "next/image";

async function AboutSection({ params: { lng } }) {
	const { t } = await useTranslation(lng, "about");
	const descriptions = [
		t("description-2"),
		t("description-3"),
		t("description-4"),
		t("description-5"),
		t("description-6"),
		t("description-7"),
	];

	return (
		<section id='about' className='text-sky-900 bg-gray-200 py-16 h-screen'>
			<div className='container mx-auto flex items-center h-full'>
				<Image
					src='https://img.freepik.com/vector-gratis/logo-diseno-letra-n_474888-2012.jpg?w=740&t=st=1703084059~exp=1703084659~hmac=8f05ad877ec0a31b48d3baf3f95a7f916f86d4df5c4142006e02c2c58e79a208'
					alt='about image'
					width={700}
					height={500}
					className='rounded-md mx-10'
				/>
				<div>
					<h2 className='text-[#474c50] text-3xl lg:text-4xl font-bold mb-8'>
						{t("about-us")}
					</h2>
					{descriptions.map((description, index) => (
						<p
							key={index}
							className={`text-black text-base md:text-lg ${
								index >= 1 && index <= 3
									? "text-justify mb-6"
									: "mb-4"
							}`}
						>
							{index >= 1 && index <= 3 ? (
								<span className='mr-2'>&#8226;</span>
							) : null}
							{description}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
