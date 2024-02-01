// Single Responsibility (Принцип единственной ответственности)
// Класс должен быть ответственен лишь за что-то одно.

// Взаимодействие с автомобилем
class Auto{
  constructor(model: string){}
  getCarModel(){}
  setCarModel(){} 
}

// Работа с клиентскими заказами
class CustomerAuto {
	saveCustomerOrder(o: Auto) { }
	getCustomerOrder(id: string) { }
	removeCustomerOrder(id: string) { }
}

// Взаимодействие с БД
class AutoDB {
	updateCarSet(set: object) { }
}