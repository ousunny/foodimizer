import $ from 'jquery';

class Randomizer {
  constructor() {
    this.list = [];
    this.input = $('.js-input-container__input');
    this.btn = $('.js-input-container__btn');
    this.events();
  }

  events() {
    this.btn.click(this.addToList.bind(this));
  }

  addToList() {
    var trimmedInput = $.trim(this.input.val());
    if (trimmedInput.length > 0) {
      this.list.push(trimmedInput);
      console.log('Added to list');
    } else {
      console.log('Not valid input')
    }

    this.input.val('');
    console.log(this.list);
  }
}

export default Randomizer;
