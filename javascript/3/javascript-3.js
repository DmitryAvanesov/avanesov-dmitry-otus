'use strict'

var pathIndexNumbers = [];

function getPath(element) {
  if (element !== document.body) {
    const parent = element.parentNode;
    const parentChildren = Array.from(parent.children);
    const indexNumber = parentChildren.indexOf(element);

    pathIndexNumbers.push(indexNumber + 1);

    return getPath(parent);
  }
  else {
    let selector = 'body';
    pathIndexNumbers.reverse();

    pathIndexNumbers.forEach((curIndexNumber) => {
      selector = selector.concat(`>:nth-child(${curIndexNumber})`);
    });

    pathIndexNumbers = [];

    return selector;
  }
}