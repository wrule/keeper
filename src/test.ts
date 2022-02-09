
import { Interval } from './index';

const i = new Interval('1m');
setInterval(() => {
  console.log(i.distance() / 1000);
}, 1000);