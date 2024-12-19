/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n)
{
    return (n | 0) === n;
}

/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even()
{
    let start = 2;
    let end = 20;
    let arr = [];
    while (start <= end)
    {
        if (start % 2 === 0)
            arr.push(start);
        ++start;
    }
    return arr;

    // или так
    // let arr = [];
    // for (let i = 2; i <= 20; i += 2)
    //     arr.push(i);
    // return arr;
    // или так xD
    //return [2, 4, 8, 10, 12, 14, 16, 18, 20];
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n)
{
    let tmp = 0;
    let sum = 0;
    do
    {
        ++tmp;
        sum += tmp;
    } while (tmp != n)
    return sum;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n)
{
    let sum = ((n === 0) || (n === 1)) ? 1 : n + recSumTo(n - 1);
    return sum;
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n)
{
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n - 1);
}

/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n)
{
    for (let i = 1; 2 ** i <= n; ++i)
        if (2 ** i === n)
            return true;
    return false;
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n)
{
    // if (n === 0)
    //     return 0;
    // else if (n === 1)
    //     return 1;
    // else
    //     return fibonacci(n - 1) + fibonacci(n - 2);

    // но пусть будет через формулу Бине с золотым сечением ;P
    tmp = (1 / 5 ** 0.5) * (((1 + 5 ** 0.5) / 2) ** n - ((1 - 5 ** 0.5) / 2) ** n);
    return tmp | 0;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn)
{
    return function (newValue)
    {
        if (typeof(operatorFn) !== 'function')
            return initialValue;
        initialValue = operatorFn(initialValue, newValue);
        return initialValue;
    }
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start=0, step=1)
{
    let count_iter = 0;
    return function ()
    {
        ++count_iter;
        if (count_iter > 1)
            return start += step;
        else
            return start;
    }
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject)
{   
    if (Object.is(firstObject, secondObject))
        return true;

    // чтобы отсеять и в .keys был только объект (null считается за object, поэтому для него отдельно)
    if (typeof(firstObject) !== 'object' || typeof(secondObject) !== 'object' || firstObject === null || secondObject === null)
        return false;

    let keysFirstObject = Object.keys(firstObject);
    let keysSecondObject = Object.keys(secondObject);

    if (keysFirstObject.length !== keysSecondObject.length)
        return false;

    return keysFirstObject.every(key => keysSecondObject.includes(key) && deepEqual(firstObject[key], secondObject[key]));
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
