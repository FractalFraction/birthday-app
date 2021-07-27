const MonthTable = require('../src/monthTable.js');

const monthTable = new MonthTable();

describe('Test the month table class', () => {

  test('check the month has the correct days', () => {
    expect(monthTable.getDaysInMonth('March')).toEqual(31);
  });

  test('test that the total number of days between some months can be found', () => {
    const month1 = monthTable.getMonthNumber('January')
    const month2 = monthTable.getMonthNumber('March')
    expect(monthTable.getDaysBetweenMonth(month1,month2)).toEqual([31,28,31]);
  })

  test('test that the total number of days between some months can be found', () => {
    const month1 = monthTable.getMonthNumber('October')
    const month2 = monthTable.getMonthNumber('April')
    expect(monthTable.getDaysBetweenMonth(month1,month2)).toEqual([31,30,31,31,28,31,30]);
  })
  
});

  