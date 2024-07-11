interface StorageStrategy<TItem> {
  get(id: string): TItem | null;
  save(item: TItem): void;
}

interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
}

const LocalStorageStrategy: StorageStrategy<Person> = {
  get(id: string) {
      // Get from local storage
      return null;
  },

  save(item: Person) {
      // Save to localstorage
  },
};

interface Registry<TItem> {
  storage: StorageStrategy<TItem> | null;
  init(strategy: StorageStrategy<TItem>): void;
  persist(item: TItem): void;
  read(id: string): TItem | null;
}

const UserRegistry: Registry<Person> = {
  storage: null,

  init(strategy) {
      this.storage = strategy;
  },

  persist(item) {
      this.storage?.save(item);
  },

  read(id) {
      return this.storage?.get(id) || null;
  },
};

UserRegistry.init(LocalStorageStrategy);