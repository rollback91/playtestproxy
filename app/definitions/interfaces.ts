export interface Card {
    id:string,
    name: string;
    mana_cost: string;
    type_line: string;
    oracle_text: string;
    colors: string[];
    color_identity: string[];
    loyalty: string;
    power: string;
    toughness:string,
    border_color:string,
    layout: string;
    card_faces: CardFace[],
  }

export interface CardFace {
  object: string,
  name: string,
  mana_cost: string,
  type_line: string,
  oracle_text: string,
  watermark: string,
  artist: string,
  artist_id: string,
  illustration_id: string,
  power:string,
  toughness:string,
  loyalty: string;
}

export enum layout {
  NORMAL = "normal",
  SPLIT = "split",
  FLIP = "flip",
  TRANSFORM = "transform",
  MODALDFC = "modal_dfc",
  MELD = "meld",
  CLASS = "class",
  CASE = "case",
  SAGA = "saga",
  ADVENTURE = "adventure",
  MUTATE = "mutate",
  PROTOTYPE = "prototype", //needs card style
  PLANAR = "planar",
  SCHEME = "scheme",
  VANGUARD = "vanguard", // Normal??
  TOKEN = "token", //Normal?
  DOUBLEFACEDTOKEN = "doublefacedtoken",
  EMBLEM = "emblem",
  AUGMENT = "augment",
  HOST = "host",
  

}