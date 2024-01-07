#!/usr/bin/env node
import { play } from '../src/index.js';
import { generateTask } from '../src/games/gameProgression.js';

play(generateTask);
