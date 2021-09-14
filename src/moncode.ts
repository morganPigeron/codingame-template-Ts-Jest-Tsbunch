/**
 * Notes
 */
/*
const ground = {
  grassLand: 2,
  waterPoint: 2,
  mountain: 4,
  swamp: 6,
  ravine: -1,
  kingCastle: 1,
  shop: 1,
};

const shop = {
  blacksmith: 2,
  stable: 2,
};
*/
//cheval ne peut pas aller dans la montagne
//armure ne peut pas aller dans l'eau
//house of a crazy wizard, teleportation

/**
 *
 */

 interface Land {
  kind?: PointOfInterest;
  landType: LandType;
  x: number;
  y: number;
}

type PointOfInterest =
  | "HOUSE"
  | "CASTLE"
  | "BLACKSMITH"
  | "STABLE"
  | "WIZARD"
  | "PRINCESS"
  | "DRAGON"
  | "TREASURE";

type LandType = "G" | "W" | "M" | "S" | "R" | "I";

/**
 *
 */

interface Position {
  x: number;
  y: number;
}

export class Man {
  constructor(public position: Position) {}
}

export class Realm {
  private map: Land[][] = [];
  
  constructor() {}
  public addLand(line: string) {
    this.map.push([]);
    line.split("").forEach((letter, index) => {
      this.map[this.map.length - 1].push({
        landType: letter as LandType,
        x:index,
        y:this.map.length-1
      });
    });
  }
  public addPointOfInterest(kind:string, x:number, y:number) {
    this.map[y][x].kind = kind as PointOfInterest;
  }
  public getHouse() {
    for(let y=0; y<this.map.length-1;y++){
      for(let x=0; x<this.map[0].length-1;x++) {
        if (this.map[y][x].kind === "HOUSE")
          return {x:x,y:y} as Position;
      }
    }
    throw new Error("no house in Map...");
  }
}
