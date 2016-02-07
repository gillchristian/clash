'use strict';
//const Tii = require('tii');

import Tii from 'tii';

var test = new Tii();

test.verboseOutput();

test.when('sarasa').should(1).equal(1);