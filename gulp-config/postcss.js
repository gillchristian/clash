var csswring        = require('csswring'),
    importer        = require('postcss-import'),
    mixins          = require('postcss-mixins'),
    variables       = require('postcss-advanced-variables');

var postcss = {
    preRucksack : [
        importer,
        mixins,
        variables
    ],

    postRucksack : [
        csswring
    ]
};

module.exports = postcss;