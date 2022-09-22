module.exports = {
  purge: ['./index.html','./src/**/*.{vue, js, ts, jsx, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ]
}
