var TASKS = {
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
    };

module.exports = TASKS;