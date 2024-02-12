export enum LocalStorageKeys {
  FASCISM_LEVEL = 'fl',
  CARRIED_EVIDENCES = 'ce',
  CARRIED_DELIVERIES = 'cd',
  DAYS = 'd',
}

export class LocalStorage {
  constructor() {
    this.initialise();
  }

  initialise() {
    if (!this.getFascismLevel()) {
      this.setFascismLevel(0);
    }

    if (!this.getCarriedEvidences()) {
      this.setCarriedEvidences([]);
    }

    if (!this.getCarriedDeliveries()) {
      this.setCarriedDeliveries([]);
    }

    if (!this.getDays()) {
      this.setDays(0);
    }
  }

  reset() {
    this.setFascismLevel(0);
    this.setCarriedEvidences([]);
    this.setCarriedDeliveries([]);
    this.setDays(0);
  }

  // FASCISM LEVEL
  reduceFascismLevel() {
    const fascismLevel = this.getFascismLevel();
    this.setFascismLevel(fascismLevel - 1);
  }

  increaseFascismLevel() {
    const fascismLevel = this.getFascismLevel();
    this.setFascismLevel(fascismLevel + 1);
  }

  setFascismLevel(value: number) {
    this.setItem(LocalStorageKeys.FASCISM_LEVEL, value);
  }

  getFascismLevel() {
    return this.getItem(LocalStorageKeys.FASCISM_LEVEL);
  }

  // EVIDENCES
  addCarriedEvidences(value: any) {
    const carriedEvidences = this.getCarriedEvidences();
    this.setCarriedEvidences([...carriedEvidences, value]);
  }

  setCarriedEvidences(value: any) {
    this.setItem(LocalStorageKeys.CARRIED_EVIDENCES, value);
  }

  getCarriedEvidences() {
    return this.getItem(LocalStorageKeys.CARRIED_EVIDENCES) || [];
  }

  // DELIVERIES
  addCarriedDeliveries(value: any) {
    const carriedDeliveries = this.getCarriedDeliveries();
    this.setCarriedDeliveries([...carriedDeliveries, value]);
  }

  setCarriedDeliveries(value: any) {
    this.setItem(LocalStorageKeys.CARRIED_DELIVERIES, value);
  }

  getCarriedDeliveries() {
    return this.getItem(LocalStorageKeys.CARRIED_DELIVERIES) || [];
  }

  // DAYS
  increaseDays() {
    const days = this.getDays();
    this.setDays(days + 1);
  }

  setDays(value: number) {
    this.setItem(LocalStorageKeys.DAYS, value);
  }

  getDays() {
    return this.getItem(LocalStorageKeys.DAYS);
  }

  // LOCAL STORAGE
  setItem(key: LocalStorageKeys, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: LocalStorageKeys) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
}
