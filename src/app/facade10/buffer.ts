export {};

Buffer.prototype.slice = function (start: number, end: number) {
  const srcLength = this.length;
  end = end != undefined ? end : srcLength;
};
