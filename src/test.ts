import moment from 'moment-timezone';
import { Interval } from './index';
import fs from 'fs';

// const i = new Interval('3d');
// setInterval(() => {
//   console.log(i.distance() / 1000 / 60 / 60);
// }, 1000);

const m = moment('2022-02-06 20:00:00').tz('America/Los_Angeles');

console.log(m.format('YYYY-MM-DD HH:mm:ss'));
