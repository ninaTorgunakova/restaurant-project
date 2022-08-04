export const nameValidator = (name: string): string => {
  if (name.length === 0) {
    return 'Name is required';
  }
  if (name.length > 50) {
    return 'Name is too long';
  }
  return '';
};

export const phoneValidator = (phone: string): string => {
  if (phone.length === 0) {
    return 'Phone number is required';
  }
  if (!new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(phone)) {
    return 'Enter valid phone number, please';
  }
  if (phone.length > 30) {
    return 'Phone number is too long';
  }
  return '';
};

export const dateValidator = (date: string): string => {
  if (date.length === 0) {
    return 'Date is required';
  }
  return '';
};

export const amountValidator = (amount: string): string => {
  if (amount.length === 0) {
    return 'Number of persons is required';
  }
  if (!new RegExp(/^[1-9]\d*$/).test(amount)) {
    return 'Enter positive number, please';
  }
  if (Number(amount) < 1 || Number(amount) > 50) {
    return 'Number of persons can be between 1 and 50';
  }
  return '';
};