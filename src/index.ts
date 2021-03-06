
export
type IntervalType =
  '1m' |
  '3m' |
  '5m' |
  '15m' |
  '30m' |
  '1h' |
  '2h' |
  '4h' |
  '6h' |
  '8h' |
  '12h' |
  '1d' |
  '3d' |
  '1w' |
  '1M';

const DAY = 1000 * 60 * 60 * 24;

export
class Interval {
  public constructor(
    private type: IntervalType,
  ) {
    this.milliseconds = this.getMilliseconds(this.type);
  }

  private milliseconds!: number;

  public distance(time: number = Number(new Date())) {
    if (this.milliseconds <= DAY * 3) {
      let a = 0;
      if (this.type === '3d') {
        a += 2 * DAY;
      }
      const remainder = (time + a) % this.milliseconds;
      if (remainder < this.milliseconds / 2) {
        return remainder;
      } else {
        return remainder - this.milliseconds;
      }
    }
    if (this.type === '1w') {
      
    }
    return 0;
  }

  private getMilliseconds(interval: string) {
    const execResult = /\d+/.exec(interval);
    if (execResult != null && execResult.length > 0) {
      const num = Number(execResult[0]) * 1000;
      if (interval.endsWith('m')) {
        return num * 60;
      } else if (interval.endsWith('h')) {
        return num * 60 * 60;
      } else if (interval.endsWith('d')) {
        return num * 60 * 60 * 24;
      } else if (interval.endsWith('w')) {
        return num * 60 * 60 * 24 * 7;
      } else if (interval.endsWith('M')) {
        return num * 60 * 60 * 24 * 30;
      }
    }
    throw new Error('b');
  }
}
