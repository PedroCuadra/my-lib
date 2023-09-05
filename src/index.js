/**
 * Calculate the nth Fibonacci number using Binet's Formula.
 * @param {number} n - The index of the Fibonacci number to calculate (non-negative integer).
 * @returns {number} The nth Fibonacci number.
 */
export function fibonacci(n) {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;

    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
}


/**
 * Calculate the factorial of a given number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} The factorial of the input number.
 */
export function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
  