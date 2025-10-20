export function validateReport(data: any) {
  const { deviceType, problemDescription, fullName, phoneNumber } = data;

  if (!deviceType || !problemDescription || !fullName || !phoneNumber)
    return 'Wszystkie pola są wymagane.';

  if (typeof fullName !== 'string' || fullName.length < 3)
    return 'Podaj poprawne imię i nazwisko.';

  if (!/^[0-9\s+-]{6,}$/.test(phoneNumber))
    return 'Podaj poprawny numer telefonu.';

  return null;
}
