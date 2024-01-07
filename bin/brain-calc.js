#!/usr/bin/env node
import { play } from '../src/index.js';
// eslint-disable-next-line import/named
import { generateTask } from '../src/games/gameCalc.js';

play(generateTask);
