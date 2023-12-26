module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "img.freepik.com",
				pathname: "**",
			},
		],
	},
};
