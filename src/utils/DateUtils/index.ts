import dayjs from "dayjs";

/**
 * Formats the date using the specified format.
 * @param {Date | string} date - The date to be formatted.
 * @param {string} dateFormat - The format specification.
 * @returns {string} - The formatted date.
 */
function formatDate(date: Date | string, dateFormat: string): string {
  return dayjs(date).format(dateFormat);
}

/**
 * Formats the date using the 'DD/MMM/YYYY' format.
 * @param {Date | string} date - The date to be formatted.
 * @returns {string} - The formatted date.
 */
function formatAsDDMMMYYY(date: Date | string): string {
  return formatDate(date, "DD/MMM/YYYY");
}

/**
 * Formats the date using the 'DD/MM/YYYY' format.
 * @param {Date | string} date - The date to be formatted.
 * @returns {string} - The formatted date.
 */
function formatAsDDMMYYY(date: Date | string): string {
  return formatDate(date, "DD/MM/YYYY");
}

/**
 * Formats the date using the 'ddd DD, MMM YYYY' format.
 * @param {Date | string} date - The date to be formatted.
 * @returns {string} - The formatted date.
 */
function formatAsDDDMMMYYY(date: Date | string): string {
  return formatDate(date, "ddd DD, MMM YYYY");
}

/**
 * Formats the date using the 'YYYY-MM-DD HH:mm:ss' format.
 * @param {Date | string} date - The date to be formatted.
 * @returns {string} - The formatted date.
 */
function formatAsYYYMMDDHHmmss(date: Date | string): string {
  return formatDate(date, "YYYY-MM-DD HH:mm:ss");
}

/**
 * Formats the date using the 'DD/MMM' format.
 * @param {Date | string} date - The date to be formatted.
 * @returns {string} - The formatted date.
 */
function formatAsDDMMM(date: Date | string) {
  return formatDate(date, "DD/MMM");
}

/**
 * Get the name of the month based on the provided date.
 * @param {Date | string} date - The date object or month number.
 * @returns {string} - The name of the month.
 */
function getMonthName(date: Date | string): string {
  return formatDate(date, "MMMM");
}

/**
 * Get the name of the day based on the provided date.
 * @param {Date | string} date - The date object.
 * @returns {string} - The name of the day.
 */
function getDayName(date: Date | string): string {
  return formatDate(date, "dddd");
}

/**
 * Get the current date object.
 * @returns {Object} - The date object.
 * @property {number} day - The day of the month.
 * @property {number} month - The month number (1-12).
 * @property {number} year - The year.
 * @property {string} dayName - The name of the day.
 * @property {string} monthName - The name of the month.
 */
function getCurrentDateObject() {
  const currentDate = new Date();

  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    dayName: getDayName(currentDate),
    monthName: getMonthName(currentDate),
  };
}

/**
 * Adds a specified number of days to a given date and returns the resulting date as a string.
 * @param {Date | string} date - The date to which the days will be added.
 * @param {number} days - The number of days to add.
 * @returns {string} - The resulting date as a string.
 */
function addDays(date: Date | string, days: number): string {
  return dayjs(date).add(days, "days").toDate().toDateString();
}

/**
 * Subtracts a specified number of days from a given date and returns the resulting date as a string.
 * @param {Date | string} date - The date from which the days will be subtracted.
 * @param {number} days - The number of days to subtract.
 * @returns {string} - The resulting date as a string.
 */
function subtractDays(date: Date | string, days: number): string {
  return dayjs(date).subtract(days, "days").toDate().toDateString();
}

export default {
  formatDate,
  formatAsDDMMMYYY,
  formatAsDDDMMMYYY,
  formatAsYYYMMDDHHmmss,
  formatAsDDMMM,
  getMonthName,
  getDayName,
  formatAsDDMMYYY,
  getCurrentDateObject,
  addDays,
  subtractDays,
};
