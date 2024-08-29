// Codewars Challenge 2024
// 246/366
// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript

class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    // return this.width * this.length * this.height;
    let { length, height, width } = this;
    return width * length * height;
  }

  getSurfaceArea() {
    // return (
    //   2 *
    //   (this.length * this.width +
    //     this.length * this.height +
    //     this.width * this.height)
    // );
    let { length, height, width } = this;
    return 2 * (length * width + length * height + width * height);
  }
}

let block = new Block([2, 4, 6]);
console.log(block.getWidth());
console.log(block.getLength());
console.log(block.getHeight());
console.log(block.getVolume());
console.log(block.getSurfaceArea());
