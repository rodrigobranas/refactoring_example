const example1 = require("./example1_after");

test("Deve calcular uma corrida de taxi em dias normais", function () {
	const distance = 1000;
	const date = new Date("2021-07-10T10:00:00");
	const price = example1.calculateRide(distance, date);
	expect(price).toBe(2100);
});

test("Deve calcular uma corrida de taxi de noite", function () {
	const distance = 1000;
	const date = new Date("2021-07-10T23:00:00");
	const price = example1.calculateRide(distance, date);
	expect(price).toBe(3900);
});

test("Deve calcular uma corrida de taxi de noite", function () {
	const distance = 1000;
	const date = new Date("2021-07-11T10:00:00");
	const price = example1.calculateRide(distance, date);
	expect(price).toBe(2900);
});

test("Deve lançar uma exception se a distância não for um número", function () {
	const distance = "1000";
	const date = new Date("2021-07-11T10:00:00");
	expect(() => example1.calculateRide(distance, date)).toThrow(new Error("Invalid distance"));
});
