function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

const message: string = greet("Ritik");
console.log(message);

//1
function add(a: number, b: number): number {
  return a + b;
}

const res: number = add(5, 7);
console.log(res);

//2
function isAdult(a: number): boolean {
  return a > 18;
}

const adult: boolean = isAdult(17);
console.log(adult);

//3
function betMsg(name: string, amount: number): string {
  return `${name} bet ${amount}`;
}

const betMessage: string = betMsg("Mike", 100);
console.log(betMessage);

//4
function formatCurrency(amount: number): string {
  return `₹${amount.toFixed(2)}`;
}

const amount: string = formatCurrency(1000);
console.log(amount);

//5
const items: string[] = ["cherry", "lemon", "bell", "seven"];

function pickSymbol(): string {
  const index = Math.floor(Math.random() * items.length);
  return items[index]!;
}

const item = pickSymbol();
console.log(item);

//Undefined

function findUSer(id: number): string | undefined {
  if (id === 1) return "Ritik";
  return undefined;
}

const user = findUSer(1);

console.log(user);

if (user !== undefined) console.log(user.toUpperCase());
