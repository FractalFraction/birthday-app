class MonthTable {
  constructor() {
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    //Leap Years are an edge case
    this.monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  getMonthNumber(myMonth) {
    const index = this.months.findIndex((month) => month === myMonth);
    return this.monthNumbers[index];
  }

  getDaysInMonth(myMonth) {
    const index = this.getMonthNumber(myMonth) - 1;
    return this.monthDays[index];
  }

  getDaysBetweenMonth(month1, month2) {
    //  Assumes the months are integers as written in the calendar. e.g Jan is 1, Feb is 2
    if (month2 > month1) {
      return this.monthDays.slice(month1 - 1, month2);
    }
    const days1 = this.monthDays.slice(month1 - 1);
    const days2 = this.monthDays.slice(0, month2);
    return days1.concat(days2);
  }
}

module.exports = MonthTable;