// NOTE: this utils should have bussiness logic from calculator
export class CalculatorUtils {
  /**
   * The calculator screen cannot have more than 9 numbers
   */
  static hasMaxDigitsOnScreen(value: string) {
    return /^[^0-9]*([0-9][^0-9]*){9,}$/.test(value);
  }

  /**
   * The calculator screen cannot have "." twice
   */
  static allowedDigit(value: string, digit: string) {
    return !(/\./g.test(value) && digit === '.');
  }

  static negate(value: string | number) {
    const val = value.toString();

    if (!val.charAt(0) || val.charAt(0) === '0') {
      return val;
    }

    return val.includes('-') ? val.replace('-', '') : '-' + val;
  }

  static parseToNumber(value: string) {
    return parseFloat((value || '0').replace(/,/g, ''));
  }

  static calculate(expression: string) {
    try {
      // eslint-disable-next-line no-eval
      return eval(expression);
    } catch (error) {
      //NOTE: not necessary to handle error, if eval fails it returns 0 to keep the flow
      return '0';
    }
  }
}
