const dateDifference = require('../src/dateDifference.js');

describe('Test the difference in months can be calculated', () => {
  it('check a month string can be converted to a number',() => {
    const birthdayMonth = 'March';
    const birthdayDay = 5;
    const dateDiff = new dateDifference(birthdayDay,birthdayMonth);
    expect(dateDiff.monthToNum()).toEqual(3)
  })


  it('check something', () => {
    // Mock the date 
    const today = new Date('December 25, 1995 23:15:30');
    const currentMonth = today.getMonth();
    const currentDay = today.getDate().toString();
    const birthdayMonth = 'March';
    const birthdayDay = 5;

    

  });
  
});

  