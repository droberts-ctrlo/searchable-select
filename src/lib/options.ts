/**
 * Searchable Select Options
 * This file defines the options for the SearchableSelect class.
 * It includes properties for the target element, class list, and placeholder text.
 * 
 * @param {HTMLSelectElement} element - The select element to be transformed into a searchable dropdown.
 * @param {HTMLElement} [target] - The target element where the dropdown will be appended.
 * @param {string[]} [classList] - Additional classes to apply to the dropdown.
 * @param {string} [placeholder] - Placeholder text for the search input.
 */
export type SearchableSelectOptions = {
    element: HTMLSelectElement;
    target?: HTMLElement;
    classList?: string[];
    placeholder?: string;
};
