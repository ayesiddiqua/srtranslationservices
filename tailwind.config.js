const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html"],
    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                darkGreen: "var(--dark-green)",
                lightGreen: "var(--light-green)",
                green: "var(--green)",
                lightPink: "var(--light-pink)",
            },
        },
    },
    plugins: [],
};
