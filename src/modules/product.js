export class product {
  constructor(
    title,
    imageSrc,
    grams = ["", "", ""],
    prices = ["", "", ""],
    type = "dish",
    info = ""
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
    ["120", "165", "210"]
  ),
  new product(
    ["Whole Bread", "Tam Ekmek"],
    "itemWhole.svg",
    ["100", "140", "180"],
    ["185", "260", "330"]
  ),
  new product(
    [`Quarter Bread`, `Çeyrek Ekmek`],
    "itemQuarter.svg",
    ["40", "55", "70"],
    ["70", "100", "130"]
  ),
  new product(
    [`On Plate`, "Tabak"],
    "itemPlate.svg",
    ["110", "150", "190"],
    ["205", "275", "345"]
  ),

  new product(["Cola", "Kola"], "cola.svg", "", "25", "beverage", "330 ml"),
  new product(["Fanta", "Fanta"], "fanta.svg", "", "25", "beverage", "330 ml"),
  new product(["Turnip Juice", "Şalgam"], "salgam.svg", "", "15", "beverage"),
  new product("Ayran", "ayranBuyuk1.svg", "", "15", "beverage", [
    `(Big)`,
    `(Büyük)`,
  ]),
  new product("Ayran", "ayranKucuk1.svg", "", "10", "beverage", [
    `(Small)`,
    `(Küçük)`,
  ]),
  new product(
    ["Mineral Water", "Sade Soda"],
    "sodaSade.svg",
    "",
    "10",
    "beverage"
  ),
  new product(
    ["Lemon Soda", "Limonlu Soda"],
    "sodaLimon.svg",
    "",
    "10",
    "beverage"
  ),
  new product([`Juice `, "Meyve Suyu"], "juice.svg", "", "10", "beverage", [
    `(Sourcherry/
    Peach)`,
    ``,
  ]),
  new product(["Water", "Su"], "su.svg", "", "5", "beverage", "(0.5 L)"),
];
