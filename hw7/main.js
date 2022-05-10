// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname,email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(1, 'Vasya', 'Ivanov', 'vasya@gmail.com', '380934158789');
// let user2 = new User( 2, 'Oleg', 'Petrov', 'oleg@gmail.com', '380987898956');
// let user3 = new User(3, 'Vika', 'Ivanova', 'vika@gmail.com', '380995684136');
// let user4 = new User(4, 'Dima', 'Molodec', 'dima@gmail.com', '380956842315');
// let user5 = new User(5, 'Maksim', 'Krykc', 'maksim@gmail.com', '380995647882');
// let user6 = new User(6, 'Gena', 'Vasiltsov', 'gena@gmail.com', '380954563214');
// let user7 = new User(7, 'Karina', 'Somoilova', 'karina@gmail.com', '380665487952');
// let user8 = new User(8, 'Pavel', 'Martyn', 'pavel@gmail.com', '3807358965450');
// let user9 = new User(9, 'Inna', 'Litvinenko', 'inna@gmail.com', '380965489657');
// let user10 = new User(10, 'Ryslan', 'Vovchenko', 'ryslan@gmail.com', '380987894563');
//
// let users = function (...user){
//     let userArray = [];
//     userArray.push(...user);
//     return userArray;
// }
// let user = users(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = user.filter(function (value){
//     if(value.id % 2 === 0){
//         return value;
//     }
// });
// console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = user.sort((a, b) => a.id - b.id);
// console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let client1 = new Client(1, 'Vasya', 'Ivanov', 'vasya@gmail.com', '380934158789', ['milk', 'bread', 'water']);
// let client2 = new Client( 2, 'Oleg', 'Petrov', 'oleg@gmail.com', '380987898956',['milk', 'bread']);
// let client3 = new Client(3, 'Vika', 'Ivanova', 'vika@gmail.com', '380995684136',['milk']);
// let client4 = new Client(4, 'Dima', 'Molodec', 'dima@gmail.com', '380956842315',['milk', 'bread', 'water', 'sweets']);
// let client5 = new Client(5, 'Maksim', 'Krykc', 'maksim@gmail.com', '380995647882', ['milk', 'bread', 'water', 'potato', 'sweets']);
// let client6 = new Client(6, 'Gena', 'Vasiltsov', 'gena@gmail.com', '380954563214',['milk', 'bread', 'water', 'shampoo', 'potato']);
// let client7 = new Client(7, 'Karina', 'Somoilova', 'karina@gmail.com', '380665487952',['milk', 'bread', 'water', 'milk']);
// let client8 = new Client(8, 'Pavel', 'Martyn', 'pavel@gmail.com', '3807358965450',['milk', 'bread', 'water', 'milk', 'sweets', 'potato']);
// let client9 = new Client(9, 'Inna', 'Litvinenko', 'inna@gmail.com', '380965489657',['milk', 'bread']);
// let client10 = new Client(10, 'Ryslan', 'Vovchenko', 'ryslan@gmail.com', '380987894563',['bread', 'water']);
//
// let clients = function (...client){
//     let clientArray = [];
//     clientArray.push(...client);
//     return clientArray;
// }
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//     let client = clients(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// let sort = (arr)=>{
//     for (const arrElement in arr) {
//         return arr.sort((a,b)=> a.order.length - b.order.length);
//     }
// }
// console.log(sort(client));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function  Car(model, manufacturer, year, maxSpeed, engine){
//     this.model = model;
//     this.manufacture = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function (){
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`);
//             console.log(this);
//         }
//     };
//     this.increaseMaxSpeed = function (maximumSpeed){
//         this.maxSpeed += maximumSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// let car1 = new Car('bmw', 'Bavaria Motors', 2022, 350, 3,5);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2020);
// car1.addDriver('Ivan');

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
//     constructor(model, manufacturer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacture = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
// }
//         drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//         info(){
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`);
//             console.log(this);
//         }
//     };
//         increaseMaxSpeed(maximumSpeed){
//         this.maxSpeed += maximumSpeed;
//     }
//         changeYear(newValue){
//         this.year = newValue;
//     }
//         addDriver(driver){
//         this.driver = driver;
//     }
// }
// let car1 = new Car('bmw', 'Bavaria Motors', 2022, 350, 3,5);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2020);
// car1.addDriver('Ivan');
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let arrCinderella = [
    new Cinderella('Inna', 25, 33),
    new Cinderella('Masha', 45, 32),
    new Cinderella('Oksana', 35, 29),
    new Cinderella('Anna', 15, 34),
    new Cinderella('Irina', 55, 27),
    new Cinderella('Nastya', 24, 24),
    new Cinderella('Lena', 67, 26),
    new Cinderella('Oleksa', 87, 45),
    new Cinderella('Inga', 17, 56),
    new Cinderella('Sveta', 20, 36)
]
function Prince(name, age, footFinder){
    this.name = name;
    this.age = age;
    this.footFinder = footFinder;
}
let prince = new Prince('Ivan', 25, 24);
let find = (arrCind, prince)=>{
    for (const key of arrCind) {
        if(key.footSize === prince.footFinder){
            return `${key.name}`;
        }
    }
}
console.log(find(arrCinderella, prince));