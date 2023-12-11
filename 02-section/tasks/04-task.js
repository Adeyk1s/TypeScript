"use strict";
var list;
(function (list) {
    list["mers"] = "mercedes";
    list["bmw"] = "bmw";
    list["tesla"] = "tesla";
})(list || (list = {}));
let cars = "mercedes";
// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку
cars = "oka";
