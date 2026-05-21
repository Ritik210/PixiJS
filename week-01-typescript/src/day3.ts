interface GameSymbol {
  readonly id: string;
  name: string;
  readonly payouts: readonly number[];
  isWild?: boolean;
  isScatter?: boolean;
}

const cherry: GameSymbol = {
  id: "cherry",
  name: "Cherry",
  payouts: [0, 0, 20],
};

const wild: GameSymbol = {
  id: "wild",
  name: "Wild",
  payouts: [0, 0, 20],
  isWild: true,
};

interface Paytable {
  [id: string]: GameSymbol;
}

const table: Paytable = {
  cherry: { id: "cherry", name: "Cherry", payouts: [0, 0, 40] },
  lemon: { id: "lemon", name: "Lemon", payouts: [0, 0, 30] },
  kiwi: { id: "kiwi", name: "Kiwi", payouts: [0, 0, 20] },
};

function getPayout(paytable: Paytable, id: string, matches: number): number {
  const sym = paytable[id]; // bracket notation, variable lookup
  if (sym === undefined) return 0;
  return sym.payouts[matches - 1] ?? 0; // matches=3 → payouts[2]
}

console.log(getPayout(table, "cherry", 3)); // 40
console.log(getPayout(table, "cherry", 2)); // 0
console.log(getPayout(table, "banana", 3)); // 0  (missing symbol)

///////////////-3-/////////////////////////////

type ReelStrip = readonly string[];

interface Reel {
  strip: ReelStrip;
  position: number;
  state: "idle" | "spinning" | "stopping";
}

function getVisibleSymbols(reel: Reel, visibleRows: number): string[] {
  const symbols: string[] = [];
  const reelSetLength = reel.strip.length;

  if (reelSetLength === 0 || visibleRows <= 0) return symbols;

  for (let i = 0; i < visibleRows; i++) {
    const index = (reel.position + i) % reelSetLength;
    symbols.push(reel.strip[index] ?? "");
  }

  return symbols;
}

const testReel: Reel = {
  strip: ["cherry", "lemon", "bell", "seven", "bar", "wild"],
  position: 4,
  state: "idle",
};

console.log(getVisibleSymbols(testReel, 3)); // ["bar", "wild", "cherry"]
console.log(getVisibleSymbols(testReel, 0)); // []
console.log(getVisibleSymbols({ ...testReel, strip: [] }, 3)); // []

////////////////////////--4--///////////////////////////////////////

interface SpinResult {
  type: "spin";
  grid: string[][];
  totalWin: number;
}

interface FreeSpinResult {
  type: "freeSpin";
  grid: string[][];
  totalWin: number;
  spinsRemaining: number;
}

type GameResult = SpinResult | FreeSpinResult;

const regularSpin: SpinResult = {
  type: "spin",
  grid: [
    ["cherry", "lemon", "bell"],
    ["wild", "cherry", "lemon"],
    ["bell", "bell", "seven"],
  ],
  totalWin: 50,
};

const freeSpin: FreeSpinResult = {
  type: "freeSpin",
  grid: [
    ["wild", "wild", "cherry"],
    ["cherry", "cherry", "lemon"],
    ["bell", "wild", "seven"],
  ],
  totalWin: 200,
  spinsRemaining: 5,
};

console.log(regularSpin);
console.log(freeSpin);

//////////////////-5-//////////////////////////////////////////

interface Player {
  readonly id: string;
  name: string;
  balance: number;
  vipLevel?: number;
  lastLoginAt?: Date;
}

function getVipBonus(player: Player): number {
  if (player.vipLevel === undefined) return 0;

  if (player.vipLevel < 3) return 0;

  return player.balance * 0.1;
}

const player: Player = {
  id: "ritik",
  name: "ritik",
  balance: 5000,
  vipLevel: 4,
};

console.log(getVipBonus(player));

////////////////////////-6-///////////////////////////////

interface BetConfig {
  minBet: number;
  maxBet: number;
  defaultBet: number;
}

interface GridConfig {
  reels: number;
  rows: number;
}

type GameConfig = BetConfig & GridConfig;

const exampleConfig: GameConfig = {
  minBet: 10,
  maxBet: 100,
  defaultBet: 20,
  reels: 5,
  rows: 5,
};

function isValidBet(amount: number, config: GameConfig): boolean {
  return amount >= config.minBet && amount <= config.maxBet;
}

console.log(isValidBet(50, exampleConfig));
console.log(isValidBet(1, exampleConfig));
console.log(isValidBet(1000, exampleConfig));

///////////////////-7-//////////////////////////////////////////////

interface AnimatedSymbol extends GameSymbol {
  idleAnimation: string;
  winAnimation: string;
}

const animatedSymbol: AnimatedSymbol = {
  id: "cherry",
  name: "Cherry",
  payouts: [0, 0, 20],
  idleAnimation: "cherry_Idle",
  winAnimation: "cherry_Win",
};

function printSymbolName(s: GameSymbol): void {
  console.log(s.name);
}

printSymbolName(animatedSymbol);
