// Open-Closed (Принцип открытости-закрытости).
// Программные сущности (классы, модули, функции) должны быть открыты для расширения, но закрыты для изменения.

abstract class CarPrice {
	abstract getPrice(): string;
}

class Tesla extends CarPrice {
	getPrice() {
		return '80 000$';
	}
}

class Audi extends CarPrice {
	getPrice() {
		return '50 000$';
	}
}

// class Bmw extends CarPrice {         Если нам нужно добавить новое авто, то мы просто РАСШИРЯЕМ 
// 	getPrice() {                        существующий массив, при этом НЕ ИЗМЕНЯЕМ реализацию
// 		return '70 000$';                 выдочи цены.
// 	}
// }

const shop: Array<CarPrice> = [
	new Tesla(),
	new Audi(),
	// new Bmw(),
];

const getPrice = (auto: Array<CarPrice>): string | void => {
	for (let i = 0; i < auto.length; i++) {
		auto[i].getPrice();
	}
}

getPrice(shop);