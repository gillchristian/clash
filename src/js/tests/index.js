'use strict';
/**
 * Classes imports
 */
import Tii from 'tii';

import keyMirror from '../helpers/keyMirror';

import Camp from '../classes/camp.class';
import Trainer from '../classes/trainer.class';
import StagingBuilding from '../classes/stagingbuilding.class';
import Unit from '../classes/unit.class';
import UnitType from '../classes/unittype.class';

var clashTests = new Tii();
/**
 * Tests Imports
 */
// --- keyMirror ---
import keyMirrorTests from './tests_keyMirror';
keyMirrorTests(clashTests, keyMirror);

// --- Camp Class ---
import { armyCampModel, campClassTests } from './tests_camp.class';
campClassTests(clashTests, Camp);

// --- Staging Building Class ---
import stagingBuildingTests from './tests_stagingbuilding.class'
// returning mocks that are reused in other files
let unitMocks = stagingBuildingTests(clashTests, armyCampModel, StagingBuilding, Unit);

// --- Trainer Class ---
import trainerClassTests from './tests_trainer.class'
trainerClassTests(clashTests, unitMocks.unitsMockArray, Trainer);

// --- Unit Class ---
import unitClassTests from './tests_unit.class'
unitClassTests(clashTests, unitMocks.unitMock);

// --- UnitType Class ---
import unitTypeTests from './tests_unittype.class';
unitTypeTests(clashTests, UnitType);

clashTests.results();