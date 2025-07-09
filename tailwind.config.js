/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
//   // presets: [require("nativewind/preset")],
//   theme: { extend: {} },
//   plugins: [],
// };
