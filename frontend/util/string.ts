export function isValidEmail(email: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function isValidPhonenumber(phonenumber: string) {
  return /^\d{3}-\d{3}-\d{4}$/.test(phonenumber);
}
