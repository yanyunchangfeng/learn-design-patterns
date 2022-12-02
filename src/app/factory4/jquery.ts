interface Jquery {
  [index: number]: any;
  length: number;
}

class Jquery {
  constructor(selector: string) {
    let element = Array.from(document.querySelectorAll(selector));
    let length = element ? element.length : 0;
    this.length = length;
    for (let i = 0; i < length; i++) {
      this[i] = element[i];
    }
  }
  html(htmlText: string | undefined) {
    if (htmlText) {
      for (let i = 0; i < this.length; i++) {
        this[i].innerHTML = htmlText;
      }
    } else {
      return this[0].innerHTML;
    }
  }
}

declare global {
  interface Window {
    $: any;
  }
}
window.$ = function (selector: string) {
  return new Jquery(selector);
};
export {};
