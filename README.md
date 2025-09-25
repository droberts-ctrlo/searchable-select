# Searchable Select

A JQuery and Bootstrap plugin for Searchable Select functionality.

Replaces the chosen select dropdown with a searchable dropdown.

## Basic Usage

```JavaScript
const select = $("#my-select");

select.searchableSelect();
```

## Options

The options type is defined as:

```Typescript
type SearchableSelectOptions = {
    target: HTMLElement;
};
```

Here you can define the target you wish to attach the dropdown to. For example. Normal behaviour means that the select will directly replace the select component in the DOM as the *last child* of the parent element (be careful here, this may reorganise your components, this is why the target can be set).

```JavaScript
select.searchableSelect({target: document.body})
```
