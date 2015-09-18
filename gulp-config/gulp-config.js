var csswring        = require('csswring'),
    importer        = require('postcss-import'),
    mixins          = require('postcss-mixins'),
    variables       = require('postcss-advanced-variables');

var config = {
    // --- tasks names
    TASKS : {
        dev: {
            style: 'css',
            jade: 'jade'
        },
        watch: {
            all: 'watch',
            style: 'css:watch',
            jade: 'jade:watch'
        },
        production: {
            ready: 'build',  
            style: 'build:style',
        },
        default: 'default'
    },
        
    // --- files paths
    FILES : {
        css: {
            source: 'toCompile/style/style.css',
            all: 'toCompile/style/**/*.css',
            dest: 'assets/style/'
        },
        jade: {
            index: 'toCompile/jade/index.jade',
            others: ['toCompile/jade/**/*.jade', '!toCompile/jade/index.jade', '!toCompile/jade/{includes,includes/**}', '!toCompile/jade/{views,views/**}' ],
            angularViews: 'toCompile/jade/views/**/*.jade',
            all: 'toCompile/jade/**/*.jade',
            dest: {
                index: '',
                angularViews: 'views/',
                others: 'html/'
            }
        }
    },

    // --- postCSS plugins
    postCSS : {
        preRucksack : [
            importer,
            mixins,
            variables
        ],
    
        postRucksack : [
            csswring
        ]
    }
};

module.exports = config;