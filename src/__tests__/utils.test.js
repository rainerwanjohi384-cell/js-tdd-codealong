// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on their birth year", () => {
    // Arrange
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    // Act
    const age = currentAgeForBirthYear(birthYear);

    // Assert
    expect(age).toBe(expectedAge);
  });

  it("returns the current year if birth year is 0", () => {
    // Arrange
    const birthYear = 0;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    // Act
    const age = currentAgeForBirthYear(birthYear);

    // Assert
    expect(age).toBe(expectedAge);
  });

  it("throws an error if birth year is in the future", () => {
    // Arrange
    const futureYear = new Date().getFullYear() + 1;

    // Act & Assert
    expect(() => currentAgeForBirthYear(futureYear)).toThrow(
      "Birth year cannot be in the future"
    );
  });

  it("throws an error if birth year is not a number", () => {
    // Act & Assert
    expect(() => currentAgeForBirthYear("abcd")).toThrow(
      "Birth year must be a number"
    );
  });
});