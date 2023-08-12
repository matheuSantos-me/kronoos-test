function isValidCPF(cpf) {
  const invalidCPFs = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (invalidCPFs.includes(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf[i - 1]) * (11 - i);
  }

  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf[9])) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf[i - 1]) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf[10])) {
    return false;
  }

  return true;
}

function isValidCNPJ(cnpj) {
  const invalidCNPJs = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999",
  ];

  if (invalidCNPJs.includes(cnpj)) {
    return false;
  }

  let sum = 0;
  let position = 5;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj[i]) * position;
    position = position === 2 ? 9 : position - 1;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(cnpj[12])) {
    return false;
  }

  sum = 0;
  position = 6;

  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj[i]) * position;
    position = position === 2 ? 9 : position - 1;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(cnpj[13])) {
    return false;
  }

  return true;
}

export const validCPFOrCNPJ = (doc) => {
  const sanitizedDoc = doc.replace(/[^\d]/g, "");

  if (sanitizedDoc.length === 11) {
    return isValidCPF(sanitizedDoc);
  } else if (sanitizedDoc.length === 14) {
    return isValidCNPJ(sanitizedDoc);
  } else {
    return false;
  }
};
