/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1D193C",
                    dark: "#131127",
                },
                highlight: "#B64C71",
                text: "#F0F7EE",
                astro: "#13151a",
            },
        },
    },
    plugins: [],
}
