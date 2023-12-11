enum list {
    mers = "mercedes",
    bmw = "bmw",
    tesla = "tesla"
}
let cars: list.mercedes| list.tesla = "mercedes";

// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку

cars = "oka";
