// comparisonModule.js

/**
 * Calculates the similarity between two strings based on the number of matching letters.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {number} The similarity percentage between the two strings.
 */
function calculateLetterSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const maxLength = Math.max(len1, len2);

    let matchingLetters = 0;

    for (let i = 0; i < maxLength; i++) {
        if (str1[i] && str2[i] && str1[i] === str2[i]) {
            matchingLetters++;
        }
    }

    return (matchingLetters / maxLength) * 100;
}


/**
 * Compares two words and returns the most similar word along with the match percentage.
 * @param {string} word1 - The first word to compare.
 * @param {string} word2 - The second word to compare.
 * @param {number} [threshold=70] - The similarity threshold percentage. Defaults to 70.
 * @returns {object} - An object containing the most similar word and the match percentage.
 */
function compareWords(word1, word2, threshold = 70) {
    const similarityPercentage = calculateLetterSimilarity(word1, word2);
    return {
        mostSimilar: similarityPercentage > threshold ? word1 : word2,
        matchPercentage: similarityPercentage
    };
}

/**
 * Compares a word with an array of objects based on a specified key and returns the most similar instance and the match percentage.
 * @param {string} word - The word to compare.
 * @param {Array} objectArray - The array of objects to compare with.
 * @param {string} key - The key in the objects to compare with the word.
 * @param {number} [threshold=70] - The minimum similarity percentage required for a match.
 * @returns {Object} - An object containing the most similar instance and the match percentage.
 *                    If no similar instance is found, mostSimilar will be null.
 */
function wordToObjectArrayComparison(word, objectArray, key, threshold = 70) {
    let mostSimilarInstance;
    let maxSimilarityPercentage = 0;

    objectArray.forEach(obj => {
        if (obj[key]) {
            const similarityPercentage = calculateLetterSimilarity(word, obj[key]);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance = obj;
            }
        }
    });

    return {
        mostSimilar: mostSimilarInstance || null,
        matchPercentage: maxSimilarityPercentage
    };
}

/**
 * Compares two objects and returns the most similar object along with the match percentage.
 * @param {Object} obj1 - The first object to compare.
 * @param {Object} obj2 - The second object to compare.
 * @param {number} [threshold=70] - The threshold percentage for considering objects as similar. Defaults to 70.
 * @returns {Object} - An object containing the most similar object and the match percentage.
 */
function compareObjects(obj1, obj2, threshold = 70) {
    const similarityPercentage = calculateLetterSimilarity(JSON.stringify(obj1), JSON.stringify(obj2));
    return {
        mostSimilar: similarityPercentage > threshold ? obj1 : obj2,
        matchPercentage: similarityPercentage
    };
}

/**
 * Compares the elements at the specified indices in two arrays and returns the most similar element along with the match percentage.
 * @param {Array} array1 - The first array.
 * @param {number} index1 - The index of the element in the first array.
 * @param {Array} array2 - The second array.
 * @param {number} index2 - The index of the element in the second array.
 * @param {number} [threshold=70] - The minimum similarity percentage required for an element to be considered a match.
 * @returns {Object} - An object containing the most similar element and the match percentage.
 */
function compareArrayPlaces(array1, index1, array2, index2, threshold = 70) {
    const similarityPercentage = calculateLetterSimilarity(array1[index1], array2[index2]);
    return {
        mostSimilar: similarityPercentage > threshold ? array1[index1] : array2[index2],
        matchPercentage: similarityPercentage
    };
}

/**
 * Compares a word with an array of words and returns the most similar instance and the match percentage.
 * @param {string} word - The word to compare.
 * @param {Array<string>} array - The array of words to compare against.
 * @param {number} [threshold=70] - The minimum similarity percentage required for a match.
 * @returns {Object} - An object containing the most similar instance and the match percentage.
 *                    If no match is found, mostSimilar will be null.
 */
function compareWordToArray(word, array, threshold = 70) {
    let mostSimilarInstance;
    let maxSimilarityPercentage = 0;

    array.forEach(item => {
        if (item) {
            const similarityPercentage = calculateLetterSimilarity(word, item);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance = item;
            }
        }
    });

    return {
        mostSimilar: mostSimilarInstance || null,
        matchPercentage: maxSimilarityPercentage
    };
}

/**
 * Compares two arrays and finds the most similar instances based on a threshold.
 * @param {Array} array1 - The first array to compare.
 * @param {Array} array2 - The second array to compare.
 * @param {number} [threshold=70] - The similarity threshold percentage.
 * @returns {Object} - An object containing the most similar instances and the match percentage.
 * @property {any|null} mostSimilar1 - The most similar instance from array1, or null if no match is found.
 * @property {any|null} mostSimilar2 - The most similar instance from array2, or null if no match is found.
 * @property {number} matchPercentage - The percentage of similarity between the most similar instances.
 */
function compareArrayToArrays(array1, array2, threshold = 70) {
    let mostSimilarInstance1;
    let mostSimilarInstance2;
    let maxSimilarityPercentage = 0;

    array1.forEach(item1 => {
        array2.forEach(item2 => {
            const similarityPercentage = calculateLetterSimilarity(item1, item2);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance1 = item1;
                mostSimilarInstance2 = item2;
            }
        });
    });

    return {
        mostSimilar1: mostSimilarInstance1 || null,
        mostSimilar2: mostSimilarInstance2 || null,
        matchPercentage: maxSimilarityPercentage
    };
}

/**
 * Compares two arrays and finds the most similar instances based on letter similarity.
 * @param {Array} array1 - The first array to compare.
 * @param {Array} array2 - The second array to compare.
 * @param {number} [threshold=70] - The minimum similarity percentage required for a match.
 * @returns {Object} - An object containing the most similar instances and the match percentage.
 *                    - {any} mostSimilar1 - The most similar instance from array1.
 *                    - {any} mostSimilar2 - The most similar instance from array2.
 *                    - {number} matchPercentage - The similarity percentage of the most similar instances.
 */
function compareArrays(array1, array2, threshold = 70) {
    let mostSimilarInstance1;
    let mostSimilarInstance2;
    let maxSimilarityPercentage = 0;

    array1.forEach(item1 => {
        array2.forEach(item2 => {
            const similarityPercentage = calculateLetterSimilarity(item1, item2);
            if (similarityPercentage > maxSimilarityPercentage) {
                maxSimilarityPercentage = similarityPercentage;
                mostSimilarInstance1 = item1;
                mostSimilarInstance2 = item2;
            }
        });
    });

    return {
        mostSimilar1: mostSimilarInstance1 || null,
        mostSimilar2: mostSimilarInstance2 || null,
        matchPercentage: maxSimilarityPercentage
    };
}

/**
 * Compares the lengths of two strings and returns the longer string and the difference in length.
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @returns {object} - An object containing the longer string and the difference in length.
 */
function compareStringLength(str1, str2) {
    return {
        longerString: str1.length >= str2.length ? str1 : str2,
        lengthDifference: Math.abs(str1.length - str2.length)
    };
}

/**
 * Compares a number to a range and returns an object with information about the comparison.
 * @param {number} number - The number to compare.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {object} - An object with the following properties:
 *   - withinRange: A boolean indicating whether the number is within the range.
 *   - deviation: The absolute difference between the number and the midpoint of the range.
 */
function compareNumberToRange(number, min, max) {
    return {
        withinRange: number >= min && number <= max,
        deviation: Math.abs(number - ((min + max) / 2))
    };
}

module.exports = {
    calculateLetterSimilarity,
    compareWords,
    wordToObjectArrayComparison,
    compareObjects,
    compareArrayPlaces,
    compareWordToArray,
    compareArrayToArrays,
    compareArrays,
    compareStringLength,
    compareNumberToRange
};
