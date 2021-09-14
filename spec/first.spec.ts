import { Man, Realm } from "../src/moncode";


describe("Problem init test suite", () => {
  let realm : Realm;

  beforeEach(()=>{
    realm = new Realm();
    realm.addLand("GGGGIGGGG");
    realm.addPointOfInterest("HOUSE",4,0);
  })

  it("Map must hold house position", () => {

    expect(realm.getHouse()).toEqual({x:4,y:0});
  })

  it("man must be begin its journey at house", () => {
    const man = new Man(realm.getHouse());
    expect(man.position).toEqual(realm.getHouse());
  });
});
