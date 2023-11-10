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
    "Half Bread",
    "itemHalf.svg",
    ["65", "90", "115"],
    ["95", "130", "165"]
  ),
  new product(
    "Whole Bread",
    "itemWhole.svg",
    ["100", "140", "180"],
    ["145", "200", "255"]
  ),
  new product(
    "Quarter Bread",
    "itemQuarter.svg",
    ["40", "55", "70"],
    ["55", "80", "100"]
  ),
  new product(
    `On Plate`,
    "itemPlate.svg",
    ["110", "150", "190"],
    ["160", "215", "270"]
  ),

  new product("Cola", "cola.svg", "", "25", "beverage", "330 ml"),
  new product("Fanta", "fanta.svg", "", "25", "beverage", "330 ml"),
  new product("Turnip Juice", "salgam.svg", "", "15", "beverage"),
  new product("Ayran", "ayranBuyuk.svg", "", "15", "beverage", `(Big)`),
  new product("Ayran ", "ayranKucuk.svg", "", "10", "beverage", `(Small)`),
  new product("Mineral Water", "sodaSade.svg", "", "10", "beverage"),
  new product("Lemon Soda", "sodaLimon.svg", "", "10", "beverage"),
  new product(
    `Juice `,
    "juice.svg",
    "",
    "10",
    "beverage",
    `(Sourcherry/
      Peach)`
  ),
  new product("Water", "su.svg", "", "5", "beverage", "(0.5 L)"),
];
