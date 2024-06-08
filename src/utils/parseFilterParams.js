const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;
  const parsedContactType = contactType.toLowerCase();
  if (!['work', 'personal', 'home'].includes(parsedContactType)) {
    return;
  }
  return parsedContactType;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'boolean') return;
  return isFavourite;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
