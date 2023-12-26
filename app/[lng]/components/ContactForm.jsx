import { useTranslation } from "../../i18n";

async function ContactForm({ params: { lng } }) {
	const { t } = await useTranslation(lng, "contact");

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-200 text-white p-8 rounded-md'>
			{/* Formulario de contacto (sin funcionalidad real) */}
			<div className='flex flex-col justify-center items-center bg-sky-900 p-6 rounded-md shadow-xl mb-10'>
				<h2 className='text-3xl font-extrabold mb-4'>
					{t("contactFormTitle")}
				</h2>
				<form className='w-full'>
					<label className='block mb-2'>{t("email")}</label>
					<input
						type='email'
						placeholder={t("emailPlaceholder")}
						className='w-full p-3 mb-4 border rounded-md'
					/>

					<label className='block mb-2'>{t("subject")}</label>
					<input
						type='text'
						placeholder={t("subjectPlaceholder")}
						className='w-full p-3 mb-4 border rounded-md'
					/>

					<label className='block mb-2'>{t("body")}</label>
					<textarea
						placeholder={t("bodyPlaceholder")}
						className='w-full p-3 mb-4 border rounded-md'
					/>

					<div className='flex justify-center'>
						{" "}
						{/* Nuevo contenedor para centrar el botón */}
						<button
							type='submit'
							className='bg-white text-sky-900 py-2 px-4 rounded-md hover:bg-sky-800'
						>
							{t("submit")}
						</button>
					</div>
				</form>
			</div>

			{/* Texto con enlace de contacto */}
			<div className='flex flex-col justify-center items-center bg-sky-900 p-6 rounded-md shadow-xl mb-10'>
				<p className='text-lg mb-4'>{t("interestText")}</p>
				<p>
					{t("contactEmail")}{" "}
					<a href='mailto:example@mail.com' className='text-white'>
						example@mail.com
					</a>
				</p>
			</div>
		</div>
	);
}

export default ContactForm;
