// Dependency Inversion (Принцип инверсии зависимостей).
// 1) Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
// 2) Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

class xmlHttpRequestService {
	open() { }
	send() { }
}

interface Connection {
	request(url: string, options: any): any;
}

// Нижний уроень
class xmlHttpService implements Connection {
	xhr = new xmlHttpRequestService();

	request(url: string, type: string) {
		this.xhr.open();
		this.xhr.send();
	}
}

// Модул верхнего уровня
class Http {
	constructor(private httpConnection: Connection) { }
	
	get(url: string, options: any) {
		this.httpConnection.request(url, 'GET');
	}

	post(url: string) {
		this.httpConnection.request(url, 'POST');
	}
}