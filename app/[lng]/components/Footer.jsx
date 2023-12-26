import React from "react";

const Footer = () => {
	return (
		<section className='mt-30'>
			<footer
				style={{
					borderTop: "1px solid black",
					backgroundColor: "white",
					position: "fixed",
					bottom: "0",
					width: "100%",
					height: "50px", // Puedes ajustar la altura según tus necesidades
					textAlign: "center",
				}}
			>
				<p
					style={{
						margin: "0",
						padding: "10px",
					}}
				>
					All rights reserved
				</p>
			</footer>
		</section>
	);
};

export default Footer;
