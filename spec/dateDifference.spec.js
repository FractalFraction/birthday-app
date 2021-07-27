const DateDifference = require('../src/dateDifference.js');

const dateDiff = new DateDifference();

describe('Test the difference in months can be calculated', () => {

  beforeEach(() => {
    let today = Date('January 1, 2020 23:15:30');
    dateDiff.setState(today,5,'March');
  });

  test('check a month string can be converted to a number',() => {
    expect(dateDiff.monthToNum()).toEqual(3);
  });

  test('check the date is converted when the birthday has a month later than current', () => {
    // Obtain the correct differences between dates
    expect(dateDiff.dayDiff()).toEqual(64);
  });
  
  test('check the date is converted when the birthday has a month earlier than current', () => {
    // Obtain the correct differences between dates
    dateDiff.setState(today,17,'December');
    expect(dateDiff.dayDiff()).toEqual(349);
  });


});

  