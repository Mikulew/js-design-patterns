type Payment = {
  clientId: number;
  amount: number;
};

interface PaymentMethod {
  charge(): Payment;
}

class PaymentStrategy {
  strategy: PaymentMethod;

  constructor(strategy: PaymentMethod) {
    this.strategy = strategy;
  }

  charge(): Payment {
    return this.strategy.charge();
  }
}

class CreditCardPayment implements PaymentMethod {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  charge(): Payment {
    console.log('Charging with creadit card');
    return this.payment;
  }
}

class DebitCardPayment implements PaymentMethod {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  charge(): Payment {
    console.log('Charging with debit card');
    return this.payment;
  }
}

const creditCardPayment = new CreditCardPayment({
  clientId: 1,
  amount: 10,
});

const debitCardPayment = new DebitCardPayment({
  clientId: 2,
  amount: 15,
});

let paymentStrategy = new PaymentStrategy(creditCardPayment);
paymentStrategy.charge(); // Charging with creadit card

paymentStrategy = new PaymentStrategy(debitCardPayment);
paymentStrategy.charge() // Charging with debit card
