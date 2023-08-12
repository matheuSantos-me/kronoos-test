export const formatDate = (date) => {
  const [year, month, day] = [
    date.substring(0, 4),
    date.substring(4, 6),
    date.substring(6, 8),
  ];

  return `${day}/${month}/${year}`;
};
