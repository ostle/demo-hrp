import Link from "next/link";
import Image from "next/image";
import { languages } from "../../../i18n/settings";

export const LngSwitcherBase = ({ t, lng }) => {
	const fontFamily = "'Open Sans', sans-serif";

	return (
		<div className='flex items-center space-x-4'>
			{languages
				.filter((l) => lng !== l)
				.map((l, index) => (
					<span
						key={l}
						className={`flex ${index > 0 ? "" : ""} items-center`}
					>
						{index > 0 && " or "}
						<Link href={`/${l}`} passHref>
							<span className='flex items-center'>
								<Image
									src={
										l === "es"
											? "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
											: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png"
									}
									alt={`${l} flag`}
									width={32}
									height={24}
								/>
								<span className='mr-2 ml-2'>
									{l.toUpperCase()}
								</span>
							</span>
						</Link>
					</span>
				))}
		</div>
	);
};
