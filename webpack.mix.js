let mix = require('laravel-mix')
let tailwind = require('tailwindcss')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({ version: 3 })
    .postCss("resources/css/field.css", "css", [
        tailwind("tailwind.config.js"),
    ])
  .nova('idez/radio-group-list')
