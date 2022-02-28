export let suma = (num1, num2) => {
    return new Promise((resolve) => {
        resolve(num1 + num2);
    });
};
export let resta = (num1, num2) => {
    return new Promise((resolve) => {
        resolve(num1 - num2);
    });
};
