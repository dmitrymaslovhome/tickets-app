import {
  getAutocompleteInstance,
  getDatepickerInstance,
} from "../plugins/materialize";

class FormUI {
  constructor(autocompleteInstance, datepickerInstance) {
    this._form = document.forms["location-controls"];
    this.origin = document.getElementById("autocomplete-origin");
    this.destination = document.getElementById("autocomplete-destination");
    this.depart = document.getElementById("datepicker-depart");
    this.return = document.getElementById("datepicker-return");
    this.originAutocomplete = autocompleteInstance(this.origin);
    this.destinationAutocomplete = autocompleteInstance(this.destination);
    this.departDatepicker = datepickerInstance(this.depart);
    this.returnDatepicker = datepickerInstance(this.return);
  }
  get form() {
    return this._form;
  }
  get originValue() {
    return this.origin.value;
  }
  get destinationValue() {
    return this.destination.value;
  }
  get departDate() {
    return this.depart.value;
  }
  get returnDate() {
    return this.return.value;
  }
  setAutocompleteData(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocompleteInstance, getDatepickerInstance);

export default formUI;