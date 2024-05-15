interface Logger {
  log(meesage: string): void;
}

class DLogger implements Logger {
  log(message: string): void {
    console.log(`DLog: ${message}`);
  }
}

abstract class LoggerDecorator implements Logger {
  constructor(public logger: Logger) {}
  abstract log(message: string): void;
}

// A decorator that converts messages to lowercase
class LowerCaseDecorator extends LoggerDecorator {
  constructor(logger: Logger) {
    super(logger);
  }

  log(message: string): void {
    let outputText = message.toLowerCase();
    this.logger.log(outputText);
  }
}

// A decorator that adds an asterisk to the message
class AddAsterisksDecorator extends LoggerDecorator {
  constructor(logger: Logger) {
    super(logger);
  }

  log(message: string): void {
    let outputText = `****** ${message} ******`;
    this.logger.log(outputText);
  }
}

const logger = new DLogger();
const lower = new LowerCaseDecorator(logger);
const asterisk = new AddAsterisksDecorator(logger);
logger.log('Hello Decorator!');
lower.log('Hello Decorator!');
asterisk.log('Hello Decorator!');
/*
 * // OUTPUT:
 *    DLog: Hello Decorator!
 *    DLog: hello decorator!
 *    DLog: ****** Hello Decorator! ******
 */
