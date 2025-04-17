/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // مسیرهای فایل‌هایی که Tailwind باید اسکن کند
        "./components/**/*.{js,ts,jsx,tsx}", // پوشه‌ی کامپوننت‌ها
        "./pages/**/*.{js,ts,jsx,tsx}", // پوشه‌ی صفحات
        "./layouts/**/*.{js,ts,jsx,tsx}", // پوشه‌ی لایوت‌ها
    ],
    darkMode:"class",
    theme: {
        extend: {
            colors: {
                primary: "#f98e2b", // اضافه کردن رنگ‌های سفارشی
                secondary: "#f3f3f3",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // اضافه کردن فونت‌های سفارشی
            },
            containers:{
                center :true,
                padding:{
                    DEFAULT:"1rem",
                    md:"3rem"
                }
            }
        },
    },
    plugins: [
        
    ],
};
