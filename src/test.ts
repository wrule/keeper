
import { Interval } from './index';

const i = new Interval('1d');
setInterval(() => {
  console.log(i.distance() / 1000 / 60 / 60);
}, 1000);