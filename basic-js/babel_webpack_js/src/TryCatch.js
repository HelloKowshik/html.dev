// Try Catch Block

// function makeWords(text) {
//     try {
//     let str = text.trim();
//     let words = str.split(' ');
//     return words;
//     }
//     catch (e) {
//         console.log(e.message);
//     }
// }

//export default makeWords;

class CustomError extends Error{
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}
export default CustomError;