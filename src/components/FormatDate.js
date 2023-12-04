import { format, parseISO } from 'date-fns';

export const FormatDateYear = date => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'yyyy');
};

export const formatDateFull = date => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'yyyy d MMMM');
};
