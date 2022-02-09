import moment from 'moment';
import { Interval } from './index';

// const i = new Interval('3d');
// setInterval(() => {
//   console.log(i.distance() / 1000 / 60 / 60);
// }, 1000);

console.log(moment().startOf('isoWeek').format('YYYY-MM-DD HH:mm:ss'));