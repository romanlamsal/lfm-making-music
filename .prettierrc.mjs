/** @type {import("prettier").Config} */
export default {
    printWidth: 120,
    tabWidth: 4,
    semi: false,
    arrowParens: "avoid",
    endOfLine: "lf",
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
}
