export const calculateAge = (dateOfBirth: string): number => {
  if (dateOfBirth) {
    const currentDate = new Date();
    const [day, month, year] = dateOfBirth.split('-');
    
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    console.log(currentDay, currentMonth, currentYear);
    console.log(day, month, year)
    let age = currentYear - (+year)
    if ((currentMonth - +month >= 0) && (currentDay - +day > 0)) ++age

    return age;
  }
  return 0
};
