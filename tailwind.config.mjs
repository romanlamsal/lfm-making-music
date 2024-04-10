/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6b21a8",
                    dark: "#4e187f",
                },
                astro: "#13151a",
            },
        },
    },
    plugins: [],
}
