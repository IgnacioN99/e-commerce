import { Predicate } from "./types";

/**
 * Adds an item to the beginning of an array.
 * @param {T[]} array - The original array.
 * @param {T} item - The item to add.
 * @returns {T[]} - The updated array with the new item added at the beginning.
 * @template T
 */
function addItemToBeginning<T>(array: T[], item: T) {
  return [item, ...array];
}

/**
 * Adds an item to the end of an array.
 * @param {T[]} array - The original array.
 * @param {T} item - The item to add.
 * @returns {T[]} - The updated array with the new item added at the end.
 * @template T
 */
function addItemToEnd<T>(array: T[], item: T) {
  return [...array, item];
}

/**
 * Adds an item at the specified position in an array.
 * @param {T[]} array - The original array.
 * @param {T} item - The item to add.
 * @param {number} index - The index at which to add the item.
 * @returns {T[]} - The updated array with the new item added at the specified position.
 * @template T
 */
function addItemAtPosition<T>(array: T[], item: T, index: number) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

/**
 * Removes items from an array based on a predicate.
 * @param {T[]} array - The original array.
 * @param {Predicate<T>} predicate - The predicate function to determine which items to remove.
 * @returns {T[]} - The updated array with the items removed.
 * @template T
 */
function removeItem<T>(array: T[], predicate: Predicate<T> ): T[] {
  return array.filter((item) => !predicate(item));
}

/**
 * Updates items in an array based on a predicate.
 * @param {T[]} array - The original array.
 * @param {T} updatedItem - The updated item.
 * @param {Predicate<T>} predicate - The predicate function to determine which items to update.
 * @returns {T[]} - The updated array with the items updated.
 * @template T
 */
function updateItem<T>(array: T[], updatedItem: T, predicate: Predicate<T>): T[] {
  return array.map((item) => {
    if (predicate(item)) {
      return {...item, ...updatedItem};
    }
    return item;
  });
}

export default {
  addItemToBeginning,
  addItemToEnd,
  addItemAtPosition,
  removeItem,
  updateItem,
};
