import React from "react";
import { useTranslation } from "../../i18n";
import Image from "next/image";

async function CvSection({ params: { lng } }) {
	const { t } = await useTranslation(lng, "cv");

	return (
		<section className='mt-12 mb-30'>
			<div className='grid grid-cols-1 lg:grid-cols-2 sm:pt-12 gap-12'>
				{/* Columna 1 */}
				<div className='col-span-2 lg:col-span-1 flex flex-col items-center text-center'>
					<div className='rounded-full border border-black overflow-hidden mb-4'>
						<Image
							src='https://img.freepik.com/free-psd/old-man-wearing-business-costume_23-2150833782.jpg?w=740&t=st=1703007607~exp=1703008207~hmac=9f8847b0357ef2396b4129f75aa45500ad7da5d44361f9f9a6a54a0d6bdd0230'
							alt='Avatar'
							width={100}
							height={100}
						/>
					</div>
					<div>
						<h1 className='text-white mb-2 text-2xl lg:text-3xl font-semibold'>
							{t("name")}
						</h1>
						<p className='text-[#ADB7BE] text-lg lg:text-xl'>
							{t("charge")}
						</p>
					</div>
					<div className='mt-8 text-white text-lg lg:text-xl text-justify'>
						{t("p")}
					</div>
					<div className='mt-8 text-white text-lg lg:text-xl text-justify'>
						{t("p1")}
					</div>
					<div className='mt-8 text-white text-lg lg:text-xl text-justify'>
						{t("p2")}
					</div>
				</div>

				{/* Columna 2 */}
				<div className='col-span-2 lg:col-span-1 flex flex-col items-center text-center'>
					<div className='rounded-full border border-black overflow-hidden mb-4'>
						<Image
							src='https://img.freepik.com/free-psd/old-man-wearing-business-costume_23-2150833782.jpg?w=740&t=st=1703007607~exp=1703008207~hmac=9f8847b0357ef2396b4129f75aa45500ad7da5d44361f9f9a6a54a0d6bdd0230'
							alt='Avatar'
							width={100}
							height={100}
						/>
					</div>
					<div>
						<h1 className='text-white mb-2 text-2xl lg:text-3xl font-semibold'>
							{t("nameB")}
						</h1>
						<p className='text-[#ADB7BE] text-lg lg:text-xl'>
							{t("chargeB")}
						</p>
					</div>
					<div className='mt-8 text-white text-lg lg:text-xl text-justify'>
						{t("pB")}
					</div>
					<div className='mt-8 text-white text-lg lg:text-xl text-justify'>
						{t("p1B")}
					</div>
					<div className='mt-8 text-white text-lg lg:text-xl text-justify'>
						{t("p2B")}
					</div>
				</div>
			</div>
			<div style={{ height: "100px" }}></div>
		</section>
	);
}

export default CvSection;
