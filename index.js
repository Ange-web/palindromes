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
  
  function isPalindrome(dateStr) {
    if (!isValidDate(dateStr)) {
      return false; // Si la date est invalide, retourner false
    }
  
    const cleanedDate = dateStr.replace(/\//g, ""); // Supprime les '/'
    const reversedDate = cleanedDate.split("").reverse().join(""); // Inverse les caractères
    return cleanedDate === reversedDate; // Compare la date originale avec sa version inversée
  }
  
  // Tests
  console.log(isPalindrome("11/02/2011")); // true (Palindrome)
  console.log(isPalindrome("12/02/2021")); // false (Non palindrome)
  console.log(isPalindrome("02/02/2020")); // true (Palindrome)
  console.log(isPalindrome("31/11/2001")); // false (Date invalide)
  console.log(isPalindrome("29/02/2020")); // false (Non palindrome)
  