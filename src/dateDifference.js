class dateDifference {
  constructor (day = 1, month = 'January') {
    this.day = day;
    this.month = month;
    this.monthTable = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
  }

  monthToNum () {
    return this.monthTable[this.month];
  }

  getDifference () {

  }

}


module.exports = dateDifference