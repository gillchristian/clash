const FILES = {
        css: {
            source: 'toCompile/style/style.css',
            all: 'toCompile/style/**/*.css',
            dest: 'app/style/'
        },
        jade: {
            index: 'toCompile/jade/index.jade',
            others: ['toCompile/jade/**/*.jade', '!toCompile/jade/index.jade', '!toCompile/jade/{includes,includes/**}', '!toCompile/jade/{views,views/**}' ],
            angularViews: 'toCompile/jade/views/**/*.jade',
            all: 'toCompile/jade/**/*.jade',
            dest: {
                index: '',
                angularViews: 'app/views/',
                others: 'app/html/'
            }
        },
        js: {
          src: 'src/js/index.js',
          bundle: 'build/js/',
          all: 'src/js/**/*.js'
        }
    };

module.exports = FILES;