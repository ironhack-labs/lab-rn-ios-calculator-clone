export const add = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  
  export const subtract = (num1: number, num2: number): number => {
    return num1 - num2;
  };
  
  export const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
  };
  
  export const divide = (num1: number, num2: number): number => {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return num1 / num2;
  };
  