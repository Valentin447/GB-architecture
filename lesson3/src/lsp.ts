// Liskov Substitution (Принцип подстановки Барбары Лисков)
// Необходимо, чтобы подклассы могли бы служить заменой для своих суперклассов.

interface Figure {
	setWidth(width: number): void;
	setHeight(height: number): void;
	areaOf(): void;
}

class Rectangle implements Figure {
	setWidth(width: number) { }
	setHeight(height: number) { }
	areaOf() { }
}

class Square implements Figure {
	setWidth(width: number) { }
	setHeight(height: number) { }
	areaOf() { }
}