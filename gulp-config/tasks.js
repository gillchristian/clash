const TASKS = {
        dev: {
            style: 'css',
            jade: 'jade'
        },
        watch: {
            all: 'watch',
            style: 'css:watch',
            jade: 'jade:watch'
        },
        js: {
          webpack: 'js'
        },
        production: {
            ready: 'build',  
            style: 'build:style',
        },
        default: 'default'
    };

module.exports = TASKS;