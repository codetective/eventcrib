const getShortMonthName = (num: number) => {
  if (num >= 1 && num <= 12) {
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    return months[num - 1];
  } else {
    return num;
  }
};

export default getShortMonthName;
