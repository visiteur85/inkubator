
import {dev, mul, sub, sum} from "./tasks";


test ("sum", () => {
//в теле функции теста есть несколько задач.
    //1. тестовые данные
    //2. выполнение кода
    //3. проверка ожидаемого кода
    const a: number = 570
    const b: number = 330 // это тестовые данные

    const result = sum(a,b)// это выполнение кода, мы импортируем нашу функцию

    expect(result).toBe(900)
})

test ("sub", () => {
//в теле функции теста есть несколько задач.
    //1. тестовые данные
    //2. выполнение кода
    //3. проверка ожидаемого кода
    const a: number = 70
    const b: number = 30 // это тестовые данные

    const result = sub(a,b)// это выполнение кода, мы импортируем нашу функцию

    expect(result).toBe(40)
})

test ("mul", () => {
//в теле функции теста есть несколько задач.
    //1. тестовые данные
    //2. выполнение кода
    //3. проверка ожидаемого кода
    const a: number = 70
    const b: number = 3 // это тестовые данные

    const result = mul(a,b)// это выполнение кода, мы импортируем нашу функцию

    expect(result).toBe(210)
})

test ("dev", () => {
//в теле функции теста есть несколько задач.
    //1. тестовые данные
    //2. выполнение кода
    //3. проверка ожидаемого кода
    const a: number = 60
    const b: number = 3 // это тестовые данные

    const result =   dev(a,b)// это выполнение кода, мы импортируем нашу функцию

    expect(result).toBe(20)
})