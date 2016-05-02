/**
 * App models
 */
import armyCamps from './army.camp';
import spellsCamps from './spells.camps';

import darkBarracks from './dark.barrack';
import darkUnits from './dark.units';

import lightBarracks from './light.barracks';
import lightUnits from './light.units';

import darkSpells from './dark.spells';
import darkSpellsFactory from './dark.spells.factory';

import lightSpells from './light.spells';
import lightSpellsFactory from './light.spells.factory';

const	lightTroops 	= [lightUnits, 'Light Units', lightBarracks, 'Ligth Barracks'],
			darkTroops 		= [darkUnits, 'Dark Units', darkBarracks, 'Dark Barracks'],
			lightFactory 	= [lightSpellsFactory, 'Factory', lightSpells, 'Ligth Spells'],
			darkFactory 	= [darkSpellsFactory, 'Dark Factory', darkSpells, 'Dark Spells'];

export { lightTroops, darkTroops, lightFactory, darkFactory, armyCamps, spellsCamps };