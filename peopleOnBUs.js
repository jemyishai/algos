/*
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
*/


let number = (bustops) => bustops.reduce((acc,[on,off])=>acc+on-off,0)
