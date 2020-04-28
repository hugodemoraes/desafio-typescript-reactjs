const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('br-BR').format(new Date(date));

export default formatDate;
