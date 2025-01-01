import { namesData } from "../data/names";
import { NameData } from "../types/name";

export const searchName = (query: string): NameData[] => {
  if (!query) return [];

  const lowerQuery = query.toLowerCase();
  return namesData
    .filter((name) => name.englishName.toLowerCase().startsWith(lowerQuery))
    .slice(0, 5);
};

export const findName = (englishName: string): NameData | undefined => {
  return namesData.find(
    (name) => name.englishName.toLowerCase() === englishName.toLowerCase()
  );
};
