import $ from 'jquery';

class Randomizer {
  constructor() {
    this.list = [];
    this.randomizerLength = 3;

    this.randomizerText = $('.js-randomizer__text');

    this.input = $('.js-input-container__input');
    this.addBtn = $('.js-input-container__btn');

    this.randomizerBtn = $('.js-randomizer-btn');
    this.events();
  }

  events() {
    this.input.keyup((e) => {
      if (e.keyCode === 13) {
        this.addToList();
      }
    });
    this.addBtn.click(this.addToList.bind(this));
    this.randomizerBtn.click(this.start.bind(this));
  }

  addToList() {
    var trimmedInput = $.trim(this.input.val());
    if (trimmedInput.length > 0) {
      this.list.push(trimmedInput);
    }

    this.input.val('');
  }

  start() {
    if (this.list.length <= 0) {
      return;
    }

    var counter = 0;

    var timer = setInterval(() => {
      if (counter++ >= this.randomizerLength * 20) {
        clearInterval(timer);
        return;
      }
      this.randomize();
    }, 50);
  }

  randomize() {
    var randomItem = this.list[Math.floor(Math.random() * this.list.length)];
    this.randomizerText.text(randomItem.toString());
  }
}

export default Randomizer;
