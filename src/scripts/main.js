'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const uls = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    uls.appendChild(li);
  }
  element.appendChild(uls);
}

createTree(tree, food);
