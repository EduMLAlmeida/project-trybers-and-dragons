import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static racesInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.racesInstancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling.racesInstancesCount;
  }
}
