/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.{js,vue}"],
    prefix: "tw-",
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [
    ],
    corePlugins: {
        preflight: false,
    }
};