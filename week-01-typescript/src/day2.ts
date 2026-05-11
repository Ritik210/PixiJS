function Sum(numbers: number[]): number {
  let res = 0;
  for (const num of numbers) {
    res += num;
  }

  return res;
}

console.log(`Sum is : ${Sum([1, 2, 3])}`);

///////////////////////////////////////////////

function Average(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  let res = 0;
  for (const num of numbers) {
    res += num;
  }

  return res / numbers.length;
}

console.log(Average([10, 20, 30]));

/////////////////////////////////////////////

function clamp(value: number, min: number, max: number): number {
  if (value >= min && value <= max) return value;
  else if (value < min) return min;
  else return max;
  // or this one line solution
  //return Math.min(Math.max(value, min), max);
}

console.log(clamp(150, 0, 100));

//////////////////////////////////////////////

function isEmpty(arr: readonly unknown[]): boolean {
  return arr.length === 0;
}

console.log(isEmpty([]));

///////////////////////////////////////////////

function pickRandom<T>(arr: readonly T[]): T {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand]!;
}

console.log(pickRandom(["cherry", "lemon", "bell", "seven"]));

////////////////////////////////////////////

function reverseString(s: string): string {
  return s.split("").reverse().join("");
}

const rev = reverseString("Ritik");
console.log(rev);

/////////////////////////////////////////

function formatMoney(amount: number, currency: string): string {
  return `${currency}${amount.toFixed(2)}`;
}

console.log(formatMoney(1234.5, "₹"));

///////////////////////////////////////////////

function range(start: number, end: number): number[] {
  const arr: number[] = [];
  for (let index = start; index < end; index++) {
    arr.push(index);
  }

  return arr;
}

console.log(range(0, 10));

//////////////////////////////////////////////////

function lastElement(arr: readonly string[]): string | undefined {
  if (arr.length === 0) return undefined;

  return arr[arr.length - 1];
}

console.log(lastElement(["a", "b", "c"]));

////////////////////////////////////////////////////

function coords(): [number, number] {
  return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

console.log(coords());

///////////////////////////////////////////////////
