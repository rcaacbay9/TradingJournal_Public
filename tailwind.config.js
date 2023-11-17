module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}