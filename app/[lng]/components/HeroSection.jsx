import React from "react";
import { useTranslation } from "../../i18n";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

async function HeroSection({ params: { lng } }) {
	const { t } = await useTranslation(lng, "hero");

	return (
		<section className='bg-sky-950'>
			<div className='grid grid-cols-1 lg:grid-cols-2 sm:pt-12'>
				<div className='lg:col-span-1 col-span-2 mx-20  flex flex-col items-center justify-center'>
					<h1 className='text-white text-4xl lg:text-6xl font-extrabold mb-12'>
						HR-P פרויקטים במשאבי אנוש
					</h1>
					<p className='text-[#ADB7BE] text-lg lg:text-xl mb-12'>
						{t("small-description")}
					</p>
					<div className='flex items-center justify-center'>
						<Link href='/[lng]/about-us' as={`/${lng}/about-us`}>
							<button className='bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mx-4'>
								{t("learn-more")}
							</button>
						</Link>
						<Link href='#contact' className='text-white'>
							{t("contact-us")}
							<FiArrowRight className='inline-block ml-1' />
						</Link>
					</div>
				</div>

				<div className='lg:col-span-1 col-span-2 place-self-center mt-4 lg:mt-0'>
					<img
						src='https://img.freepik.com/foto-gratis/negocios-concepto-entrevista-trabajo_1421-77.jpg?w=1380&t=st=1702995690~exp=1702996290~hmac=cd188f4d580092d194686cf4a415966844d81951a7a3f847109143a0158c6171'
						alt='logo-hrp'
						className='w-full h-auto'
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
