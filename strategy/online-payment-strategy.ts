interface OnlinePaymentStrategy {
  processPayment(amount: number): void;
}

class PayPalStrategy implements OnlinePaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

class CreditCardStrategy implements OnlinePaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using Creadit Card.`);
  }
}

class BitcoinStrategy implements OnlinePaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin.`);
  }
}

class OnlineStore {
  private paymentStrategy: OnlinePaymentStrategy;

  constructor(paymentStrategy: OnlinePaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.processPayment(amount);
  }
}

const paypal = new PayPalStrategy();
const storeWithPaypal = new OnlineStore(paypal);
storeWithPaypal.checkout(100); // "Paid 100 using PayPal."

const creditCard = new CreditCardStrategy();
const storeWithCreditCard = new OnlineStore(creditCard);
storeWithCreditCard.checkout(200); // "Paid 200 using Credit Card."

const bitcoin = new BitcoinStrategy();
const storeWithBitcoin = new OnlineStore(bitcoin);
storeWithBitcoin.checkout(300); // "Paid 300 using Bitcoin."