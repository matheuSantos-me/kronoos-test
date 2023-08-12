export const formatCPFOrCNPJ = (CPFOrCNPJ) => {
  if (CPFOrCNPJ.length === 11) {
    return `${CPFOrCNPJ.slice(0, 3)}.${CPFOrCNPJ.slice(3, 6)}.${CPFOrCNPJ.slice(
      6,
      9
    )}-${CPFOrCNPJ.slice(9)}`;
  }

  if (CPFOrCNPJ.length === 14) {
    return `${CPFOrCNPJ.slice(0, 2)}.${CPFOrCNPJ.slice(2, 5)}.${CPFOrCNPJ.slice(
      5,
      8
    )}/${CPFOrCNPJ.slice(8, 12)}-${CPFOrCNPJ.slice(12)}`;
  }
};
