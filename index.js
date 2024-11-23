function maxDaysInMonth(month, year) {
    const monthsWith30Days = [4, 6, 9, 11];
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  
    if (monthsWith31Days.includes(month)) {
      return 31;
    } else if (monthsWith30Days.includes(month)) {
      return 30;
    } else if (month === 2) {
      return isLeapYear(year) ? 29 : 28;
    }
    return 0;
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function isValidDate(dateStr) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(dateStr)) {
      return false;
    }
  
    const [day, month, year] = dateStr.split('/').map(Number);
  
    if (month < 1 || month > 12 || year < 1000 || year > 9999) {
      return false;
    }
  
    const maxDays = maxDaysInMonth(month, year);
    return day >= 1 && day <= maxDays;
  }
  
  console.log(isValidDate("03/04/2001")); // true
  console.log(isValidDate("03/14/2001")); // false
  console.log(isValidDate("31/11/2001")); // false
  console.log(isValidDate("29/02/2020")); // true
  console.log(isValidDate("29/02/2021")); // false
  console.log(isValidDate("01/01/999"));  // false
  console.log(isValidDate("32/01/2000")); // false
  