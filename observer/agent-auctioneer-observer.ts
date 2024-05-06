interface AgentSubject {
  subscribe(auctioneer: AuctioneerObserver): void;
  unsubscribe(auctioneer: AuctioneerObserver): void;
  notify(): void;
}

interface AuctioneerObserver {
  name: string;
  MAX_LIMIT: number;
  update(agent: AgentSubject): void;
}

class BusinessProduct {
  public price;
  public name;
  public auctioneer: AuctioneerObserver | null = null;

  constructor(product: BusinessProduct) {
    this.price = product.price || 10;
    this.name = product.name || "Unknown";
  }
}

class ConcreteAgent implements AgentSubject {
  public product: BusinessProduct;
  private auctioneers: AuctioneerObserver[] = [];

  public subscribe(auctioneer: AuctioneerObserver): void {
    const isExist = this.auctioneers.includes(auctioneer);
    if (isExist) {
      return console.log("Agent: Auctioneer has been attached already.");
    }

    console.log("Agent: Attached an auctioneer.");
    this.auctioneers.push(auctioneer);
  }

  public unsubscribe(auctioneer: AuctioneerObserver): void {
    const auctioneerIndex = this.auctioneers.indexOf(auctioneer);
    if (auctioneerIndex === -1) {
      return console.log("Agent: Nonexistent auctioneer.");
    }

    this.auctioneers.splice(auctioneerIndex, 1);
    console.log("Agent: Detached an auctioneer.");
  }

  public notify(): void {
    console.log("Agent: Notifying auctioneer...");
    for (const auctioneer of this.auctioneers) {
      auctioneer.update(this);
    }
  }

  public bidUp(auctioneer: AuctioneerObserver, bid: number): void {
    console.log("Agent: I'm doing something important.");
    const isExist = this.auctioneers.includes(auctioneer);
    if (!isExist) {
      return console.log("Agent: Auctioneer there is not in the system.");
    }
    if (this.product.price >= bid) {
      console.log("bid", bid);
      console.log("price", this.product.price);
      return console.log(`Agent: ${auctioneer.name}, your bid is not valid`);
    }
    this.product.price = bid;
    this.product.auctioneer = auctioneer;

    console.log(
      `Agent: The new price is ${bid} and the new owner is ${auctioneer.name}`
    );
    this.notify();
  }
}

class ConcreteAuctioneerA implements AuctioneerObserver {
  name = "ConcreteAuctioneerA";
  MAX_LIMIT = 100;

  public update(agent: AgentSubject): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctioneer === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const bid = Math.round(agent.product.price * 1.1);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}

class ConcreteAuctioneerB implements AuctioneerObserver {
  name = "ConcreteAuctioneerB";
  MAX_LIMIT = 200;

  public update(agent: AgentSubject): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctioneer === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const isBid = Math.random() < 0.5;
    if (!isBid) {
      return console.log(`${this.name}: I give up!`);
    }
    const bid = Math.round(agent.product.price * 1.05);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}

class ConcreteAuctioneerC implements AuctioneerObserver {
  name = "ConcreteAuctioneerC";
  MAX_LIMIT = 500;

  public update(agent: AgentSubject): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctioneer === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const isBid = Math.random() < 0.2;
    if (!isBid) {
      return console.log(`${this.name}: I give up!`);
    }
    const bid = Math.round(agent.product.price * 1.3);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}

class ConcreteAuctioneerD implements AuctioneerObserver {
  name = "ConcreteAuctioneerD";
  MAX_LIMIT = 1000;

  public update(agent: AgentSubject): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctioneer === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const isBid = Math.random() < 0.8;
    if (!isBid) {
      return console.log(`${this.name}: I give up!`);
    }
    const bid = Math.round(agent.product.price * 1.2);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}

const concreteAgent = new ConcreteAgent();

const auctioneerA = new ConcreteAuctioneerA();
const auctioneerB = new ConcreteAuctioneerB();
const auctioneerC = new ConcreteAuctioneerC();
const auctioneerD = new ConcreteAuctioneerD();

concreteAgent.subscribe(auctioneerA);
concreteAgent.subscribe(auctioneerB);
concreteAgent.subscribe(auctioneerC);
concreteAgent.subscribe(auctioneerD);

const diamond = new BusinessProduct({ name: "Diamond", price: 5 });
concreteAgent.product = diamond;

concreteAgent.bidUp(auctioneerA, 10);

console.log("--------- new Bid-----------");

concreteAgent.unsubscribe(auctioneerD);

const gem = new BusinessProduct({ name: "Gem", price: 3 });
concreteAgent.product = gem;

concreteAgent.bidUp(auctioneerB, 5);

console.log(`The winner of the bid is 
             Product: ${diamond.name}
             Name: ${diamond.auctioneer!.name}
             Price: ${diamond.price}`);

console.log(`The winner of the bid is 
             Product: ${gem.name}
             Name: ${gem.auctioneer!.name}
             Price: ${gem.price}`);