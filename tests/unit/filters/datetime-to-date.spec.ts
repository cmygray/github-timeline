import { dateTimeToDate } from '@/filters/datetime-to-date';

describe('dateTimeToDate', () => {
  const TIME_STAMP = '2019-05-08T07:20:49.323Z';

  it('should return string in the format of yyyy.mm.dd', () => {
    const result = dateTimeToDate(TIME_STAMP);

    expect(result).toEqual('2019.05.08');
  });
});
