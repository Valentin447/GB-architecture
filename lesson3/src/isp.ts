// Interface Segregation (Принцип разделения интерфейса)
// Клиенты не должны зависеть от интерфейсов, которые они не используют.

interface TeslaSet {
	getTeslaSet(): any;
}

interface AudiSet {
	getAudiSet(): any;
}

interface BmwSet {
	getBmwSet(): any;
}

class Tesla1 implements TeslaSet {
	getTeslaSet(): any { };
}

class Audi1 implements AudiSet {
	getAudiSet(): any { };
}

class Bmw1 implements BmwSet {
	getBmwSet(): any { };
}