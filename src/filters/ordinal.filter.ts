export default function ordinalFormatter(number) {
  if (Number.isNaN(number) || number < 1) {
    return number;
  }
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
}
