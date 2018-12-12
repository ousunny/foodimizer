import $ from 'jquery';

class ListDisplay {
  constructor(display) {
    this.display = $(`.${display}`);
  }

  add(item, itemClass) {
    this.display.append(`<p class="${itemClass}">${item}</p>`);
  }
}

export default ListDisplay;
