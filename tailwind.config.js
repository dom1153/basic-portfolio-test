// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    // zIndex: {
    //   '0': 0,
    //   '10': 10,
    //   '20': 20,
    //   '30': 30,
    //   '40': 40,
    //   '50': 50,
    //   '-1': '-1',
    //   '-2': '-2',
    // },
    visibility: ['responsive', 'hover', 'focus'],
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    borderStyle: ['responsive', 'hover', 'focus'],
  }
}