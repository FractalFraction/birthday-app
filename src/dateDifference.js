const MonthTable = require('./monthTable.js');

class dateDifference {
  constructor (today = new Date(), day = 1, month = 'January') {
    this.today = today;
    this.day = day;
    this.month = month;
    this.monthTable = new MonthTable();
  }

  setState(today, day, month,){
    this.today = today || this.today;
    this.day = day || this.day;
    this.month = month || this.month;    
  }

  monthToNum() {
    console.log(this.month);
    return this.monthTable.getMonthNumber(this.month)
  }

  monthDiff () {
    this.monthTable.getMonthNumber(this.month);
  }

  dayDiff () {
    this.today.getDate() 
    this.today.getMonth()   

    return 
  }

}


module.exports = dateDifference