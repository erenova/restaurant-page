export class product {
  constructor(
    title,
    imageSrc,
    grams = ["", "", ""],
    prices = ["", "", ""],
    type = "dish",
    info = "",
  ) {
    this.title = title;
    (this.imageSrc = imageSrc), (this.grams = grams), (this.prices = prices);
    this.type = type;
    this.info = info;
  }
}

export const productsList = [
  new product(
    ["Half Bread", "Yarım Ekmek"],
    "itemHalf.svg",
    ["65", "90", "115"],
    ["150", "205", "260"],
  ),
  new product(
    ["Whole Bread", "Tam Ekmek"],
    "itemWhole.svg",
    ["100", "140", "180"],
    ["235", "325", "415"],
  ),
  new product(
    [`Quarter Bread`, `Çeyrek Ekmek`],
    "itemQuarter.svg",
    ["40", "55", "70"],
    ["90", "125", "160"],
  ),
  new product(
    [`On Plate`, "Tabak"],
    "itemPlate.svg",
    ["110", "150", "190"],
    ["255", "345", "435"],
  ),

  new product(["Cola", "Kola"], "cola.svg", "", "35", "beverage", "330 ml"),
  new product(["Fanta", "Fanta"], "fanta.svg", "", "35", "beverage", "330 ml"),
  new product(["Turnip Juice", "Şalgam"], "salgam.svg", "", "25", "beverage"),
  new product("Ayran", "ayranBuyuk1.svg", "", "25", "beverage", [
    `(Big)`,
    `(Büyük)`,
  ]),
  new product("Ayran", "ayranKucuk1.svg", "", "15", "beverage", [
    `(Small)`,
    `(Küçük)`,
  ]),
  new product(
    ["Mineral Water", "Maden Suyu"],
    "sodaSade.svg",
    "",
    "20",
    "beverage",
  ),
  new product(
    ["Lemon Soda", "Limonlu Soda"],
    "sodaLimon.svg",
    "",
    "20",
    "beverage",
  ),
  new product([`Juice `, "Meyve Suyu"], "juice.svg", "", "20", "beverage", [
    `(Sourcherry/
    Peach)`,
    ``,
  ]),
  new product(["Water", "Su"], "su.svg", "", "10", "beverage", "(0.5 L)"),
];
