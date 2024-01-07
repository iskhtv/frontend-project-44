#!/usr/bin/env node
import { play } from '../src/index.js';
import { generateTask } from '../src/games/gameCalc.js';

play(generateTask);
