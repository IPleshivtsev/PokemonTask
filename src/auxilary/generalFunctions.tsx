// Функция приведения строки к формату с заглавной буквой
export function setCapitalLetterForString(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
