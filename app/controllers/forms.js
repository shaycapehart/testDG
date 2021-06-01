/**
 * Copyright 2018 Joseph W. May. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The FormBuilder object provides a set of helper functions for
 * constructing form elements.
 */
var FormBuilder = function () { }


/**
 * Returns an HTML-formatted string of selector elements.
 * 
 * The inputs object should have  the following keys:
 *  - inputs.title      (string)  the selector title
 *  - inputs.name       (string)  the selector name
 *  - inputs.selected   (string)  the selected value
 *  - inputs.labels     (array)   the labels for each input
 *  - inputs.values     (array)   the values for each input
 *  - inputs.required   (boolean) true if input is to be required
 * 
 * @param {Object} inputs The selector input data.
 * @returns {String} The HTML-formatted string of input elements.
 */
FormBuilder.prototype.insertSelector = function (inputs) {
  var {
    title,
    name,
    selected,
    labels,
    values,
    required
  } = inputs

  // labels and values arrays must have same length
  if (labels.length !== values.length) {
    throw 'Insert selector error: labels and values not same length'
  }

  // Construct and return the selector
  var selector = `
    <div class="selector">
      <h6 class="selector-title">${title}</h6>
      ${values.map((value, i) => `
      <label>
        <input name="${name}" type="radio" value="${value}" ${(required && i === 0) ? ' required' : ''}${selected == value ? ' checked' : ''}>
        <span class="selector-label">${labels[i]}</span>
      </label>`).join('')}
    </div>`

  return selector
}


/**
 * Returns an HTML-formatted string select element with the given options.
 * 
 * The inputs object should have  the following keys:
 *  - inputs.title         (string)   the select title
 *  - inputs.name          (string)   the select name
 *  - inputs.selected      (string)   the selected value (optional)
 *  - inputs.labels        (array)    the labels for each option
 *  - inputs.values        (array)    the values for each option
 *  - inputs.classes       (array)    the class names to add to the select
 *  - inputs.required      (boolean)  true if select is to be required
 *  - inputs.defaultValue  (string)   the default value if none is selected
 * 
 * @param {Object} inputs The select input data.
 * @returns {String} The HTML-formatted string select element.
 */
FormBuilder.prototype.insertSelect = function (inputs) {
  var {
    title,
    name,
    selected,
    labels,
    values,
    classes,
    required,
    defaultValue
  } = inputs

  // labels and values arrays must have same length
  if (labels.length !== values.length) {
    throw 'Insert select error: labels and values not same length'
  }

  // Set the default selected option if none is specified
  if (!selected || selected === '') {
    selected = defaultValue
  }

  // Process the given classes
  if (!classes) {
    classes = ''
  } else {
    classes = classes.join(' ')
  }

  // Construct and return the select
  var select = `
    <select id="${name}" name="${name}" class="${classes}"${required ? ' required' : ''}>
    ${values.map((value, i) => `<option value="${value}"${value == selected ? ' selected' : ''}>${labels[i]}</option>`).join('')}
    </select>
    <label>${title}</label>
    `

  return select
}