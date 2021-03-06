import $ from 'jquery';

import ListDisplay from './ListDisplay';

class Randomizer {
  constructor() {
    this.display = new ListDisplay('food-list', 'food-list__item');

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
    this.addBtn.on('animationend', this.removeErrorClasses.bind(this));

    this.randomizerBtn.click(this.start.bind(this));
    this.randomizerBtn.on('animationend', this.removeErrorClasses.bind(this));
  }

  addToList() {
    var trimmedInput = $.trim(this.input.val());
    if (trimmedInput.length > 0) {
      this.display.add(trimmedInput);
    } else {
      this.addBtn.addClass('input-container__btn--rotate-shake btn--red-text');
    }

    this.input.val('');
  }

  start() {
    if (this.display.getList().length <= 0) {
      this.randomizerBtn.addClass('btn--shake btn--bg-red')
      return;
    }

    var counter = 0;

    var timer = setInterval(() => {
      this.randomizerBtn.prop('disabled', true).addClass('btn--disabled');
      this.input.prop('disabled', true);
      this.addBtn.addClass('input-container__btn--disabled');
      this.display.setDisable(true);
      if (counter++ >= this.randomizerLength * 20) {
        clearInterval(timer);
        this.randomizerBtn.prop('disabled', false).removeClass('btn--disabled');
        this.input.prop('disabled', false);
        this.addBtn.removeClass('input-container__btn--disabled');
        this.display.setDisable(false);
        return;
      }
      this.randomize();
    }, 50);
  }

  randomize() {
    var list = this.display.getList();
    var randomItem = list[Math.floor(Math.random() * list.length)];
    this.randomizerText.text(randomItem.toString());
  }

  removeErrorClasses() {
    this.addBtn.removeClass('input-container__btn--rotate-shake btn--red-text');
    this.randomizerBtn.removeClass('btn--shake btn--bg-red');
  }
}

export default Randomizer;
