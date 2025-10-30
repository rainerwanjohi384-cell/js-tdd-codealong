// src/utils.js

/**
 * Returns the current age of a person given their birth year
 * @param {number} birthYear - The year the person was born
 * @returns {number} - The person's age
 * @throws Will throw an error if birthYear is not a number or is in the future
 */
export function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();

  if (typeof birthYear !== "number") {
    throw new Error("Birth year must be a number");
  }

  if (birthYear > currentYear) {
    throw new Error("Birth year cannot be in the future");
  }

  return currentYear - birthYear;
}