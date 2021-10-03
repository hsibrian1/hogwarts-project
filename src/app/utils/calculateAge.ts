export const calculateAge = (dateOfBirth: string, yearOfBirth?: number): number => {
  if (dateOfBirth) {
    const currentDate = new Date();
    const [day, month, year] = dateOfBirth.split('-');
    
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    let age = currentYear - (+year)
    if ((currentMonth - +month >= 0) && (currentDay - +day > 0)) ++age

    return age;
  } else if (yearOfBirth) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - yearOfBirth
  }
  return 0
};
