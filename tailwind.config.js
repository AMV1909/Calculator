/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				softWhite: "#f5f7ff",
				lightBlue: "#97ecff",
				blue: "#238aff",
				darkBlue: "#1f2b54",
				gray: "#6e7691",
				lightGray: "#d8ddf0",
				red: "#ff445a",
				yellow: "#ffc904",
				green: "#63de77",

				softWhiteHover: "#c2c8e0",
				blueHover: "#144e99",
				darkBlueHover: "#0e1327",
				grayHover: "#404858",
				lightGrayHover: "#b3b9ca",
				redHover: "#b33242",
				yellowHover: "#b38602",
				greenHover: "#3e8f4b",
			},
		},
	},
	plugins: [],
};
