import React from "react";

import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "../../i18n";

async function EmailSection({ params: { lng } }) {
	const { t } = await useTranslation(lng, "email");

	return (
		<section
			id='contact'
			className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
			<div className='z-10'>
				<h5 className='text-xl font-bold text-white my-2'>
					{t("lets-connect")}
				</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>{t("text")}</p>
				<a
					href='mailto:example@mail.com'
					className='text-[#ADB7BE] mt-4 max-w-md'
				>
					example@mail.com
				</a>
			</div>
			<div>
				<form className='flex flex-col'>
					<div className='mb-6'>
						<label
							htmlFor='email'
							className='text-white block mb-2 text-sm font-medium'
						>
							{t("email")}
						</label>
						<input
							name='email'
							type='email'
							id='email'
							required
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
							placeholder='example@mail.com'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='subject'
							className='text-white block text-sm mb-2 font-medium'
						>
							{t("subject")}
						</label>
						<input
							name='subject'
							type='text'
							id='subject'
							required
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
							placeholder='Subject'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='message'
							className='text-white block text-sm mb-2 font-medium'
						>
							{t("message")}
						</label>
						<textarea
							name='message'
							id='message'
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
							placeholder={t("talk-about")}
						/>
					</div>
					<button
						type='submit'
						className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
					>
						{t("send")}
					</button>
				</form>
			</div>
		</section>
	);
}

export default EmailSection;
