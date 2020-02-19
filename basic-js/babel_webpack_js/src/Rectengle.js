import Shape from './Shape.js';
class Rectengle extends Shape{
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log('Drawing A Rectengle...');
    }
    calulateArea() {
        return (this.width * this.height);
    }
}
export default Rectengle;