/**
 * @typedef Person
 * @property {!string} name
 */

/**
 * Pretty prints object
 * @param {Person} object - the object to be formatted
 * @throws {TypeError} Parameter has to match the specified type
 * @version 0.1.0
 * @example
 * format({ name: "John" })
 * @todo Parameterize number of spaces
 */
export const format = object => JSON.stringify(object, null, 2);

/**
 * Capitalizes string
 * @param {string} string - string to be capitalized
 * @example
 * capitalize("john")
 * // returns John
 * @todo Add capability to capitalize $from $to
 */
export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
