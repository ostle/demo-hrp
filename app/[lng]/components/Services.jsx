import { useTranslation } from "../../i18n";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

async function Services({ params: { lng } }) {
	const { t } = await useTranslation(lng, "services");

	const imagenDefault =
		"https://img.freepik.com/foto-gratis/negocios-concepto-entrevista-trabajo_1421-77.jpg?w=1380&t=st=1702995690~exp=1702996290~hmac=cd188f4d580092d194686cf4a415966844d81951a7a3f847109143a0158c6171";

	// Array de objetos que contiene la información de cada servicio
	const servicios = [
		{
			title: t("title-1"),
			description: t("description-1"),
			link: "/service-1",
		},
		{
			title: t("title-2"),
			description: t("description-2"),
			link: "/service-2",
		},
		{
			title: t("title-3"),
			description: t("description-3"),
			link: "/service-3",
		},
		{
			title: t("title-4"),
			description: t("description-4"),
			link: "/service-4",
		},
	];

	return (
		<section className='bg-gray-200'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-12'>
				{servicios.map((servicio, index) => (
					<div
						key={index}
						className='bg-white p-4 mx-0 my-0 rounded-lg shadow-md'
					>
						<img
							src={imagenDefault}
							alt={`Imagen del servicio ${index + 1}`}
							className='w-full h-40 object-cover mb-4 p-0 m-0 rounded-lg'
						/>
						<h3 className='text-xl font-bold text-sky-900 mb-2 mx-4'>
							{servicio.title}
						</h3>
						<p className='text-gray-600 mx-4 text-justify'>
							{servicio.description}
						</p>
						<Link href={servicio.link} passHref>
							<button className='mt-4 mx-4 flex items-center text-sky-900 hover:underline'>
								{t("more")}
								<IoIosArrowForward className='ml-2' />
							</button>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}

export default Services;
