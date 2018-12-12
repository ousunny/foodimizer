import $ from 'jquery';

class ListDisplay {
  constructor(display, itemSelector) {
    this.items = [];
    this.disable = false;
    this.display = $(`.${display}`);
    this.itemSelector = itemSelector;

    this.events();
  }

  events() {
    this.display.on('click', `.${this.itemSelector}`, (e) => {
      if (!this.disable) {
        this.items.splice(this.items.indexOf($(e.target).text()), 1);
        $(e.target).remove();
      }
    });

  }

  add(item, itemClass = this.itemSelector) {
    this.items.push(item);
    this.display.append(`<p class="${itemClass}">${item}</p>`);
  }

  setDisable(disable) {
    this.disable = disable;
  }

  getList() {
    return this.items;
  }
}

export default ListDisplay;
