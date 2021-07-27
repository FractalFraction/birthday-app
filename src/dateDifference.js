const MonthTable = require('./monthTable');

class dateDifference {
  constructor(today = new Date(), day = 1, month = 'January') {
    this.todayDay = today.getDate();
    this.todayMonth = today.getMonth();
    this.day = day;
    this.month = month;
    this.monthTable = new MonthTable();
  }

  setState(today, day, month) {
    this.today = today || this.today;
    this.day = day || this.day;
    this.month = month || this.month;
  }

  monthToNum() {
    return this.monthTable.getMonthNumber(this.month);
  }

  monthDiff() {
    this.monthTable.getMonthNumber(this.month);
  }

  dayDiff() {
    // console.log(this.today);
    // console.log(typeof this.today);
    // console.log(this.today.getMonth());
    const daysArray = this.monthTable.getDaysBetweenMonth(this.todayMonth + 1, this.month);
    // Change first element to appropriate day
    if (this.month > this.todayMonth + 1) {
      daysArray[0] = daysArray[0] + 1 - this.todayDay;
      daysArray[-1] = daysArray[-1] + 1 - this.day;
      return daysArray;
    }
    daysArray[0] = daysArray[0] + 1 - this.day;
    daysArray[-1] = daysArray[-1] + 1 - this.todayDay;
    return daysArray;
  }
}

module.exports = dateDifference;