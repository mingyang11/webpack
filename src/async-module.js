function getComponent() {
  return import('lodash').then((lodash) => {
    console.log(lodash, 'lodash');
    const element = document.createElement('div');
    element.innerHTML = lodash.default.join(['yangmy', 'chuze'], ',');
    return element;
  });
}

getComponent().then((element) => {
  document.body.appendChild(element);
});
