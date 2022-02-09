
import { Interval } from './index';

const i = new Interval('3d');
setInterval(() => {
  console.log(i.distance() / 1000 / 60 / 60);
}, 1000);