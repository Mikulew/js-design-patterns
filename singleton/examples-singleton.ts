class ExampleSingleton {
  private static instance: ExampleSingleton;  

  private constructor() {
    // Private constructor to prevent direct instantiation
  }  

  public static getInstance(): ExampleSingleton {
    if (!ExampleSingleton.instance) {
      ExampleSingleton.instance = new ExampleSingleton();
    }
    return ExampleSingleton.instance;
  }  

  public doSomething(): void {
    console.log("Singleton instance performing an action.");
  }
}

// Usage:
const instance1 = ExampleSingleton.getInstance();
instance1.doSomething();

const instance2 = ExampleSingleton.getInstance();
instance2.doSomething();

console.log(instance1 === instance2); // true

class ExampleDatabaseConnection {
  private static instance: ExampleDatabaseConnection;
  
  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): ExampleDatabaseConnection {
    if (!ExampleDatabaseConnection.instance) {
      ExampleDatabaseConnection.instance = new ExampleDatabaseConnection();
      // Perform database connection setup here
    }
    return ExampleDatabaseConnection.instance;
  }

  public query(sql: string): void {
    // Execute the query
    console.log(`Executing query: ${sql}`);
  }
}

// Usage:
const dbConnection1 = ExampleDatabaseConnection.getInstance();
dbConnection1.query("SELECT * FROM users");

const dbConnection2 = ExampleDatabaseConnection.getInstance();
dbConnection2.query("UPDATE users SET name = 'John'");

console.log(dbConnection1 === dbConnection2); // true

enum LogLevel {
  INFO,
  ERROR,
  WARNING
}

class ExampleLogger {
  private static instance: ExampleLogger;
  
  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): ExampleLogger {
    if (!ExampleLogger.instance) {
      ExampleLogger.instance = new ExampleLogger();
    }
    return ExampleLogger.instance;
  }

  public log(level: LogLevel, message: string): void {
    // Log the message with the specified level
    console.log(`[${LogLevel[level]}] ${message}`);
  }
}

// Usage:
const logger1 = ExampleLogger.getInstance();
logger1.log(LogLevel.INFO, "Application started");

const logger2 = ExampleLogger.getInstance();
logger2.log(LogLevel.ERROR, "An error occurred");

console.log(logger1 === logger2); // true

class ExampleConfiguration {
  private static instance: ExampleConfiguration;
  private settings: { [key: string]: string };
  
  private constructor() {
    // Private constructor to prevent direct instantiation
    this.settings = {
      apiEndpoint: "https://api.example.com",
      apiKey: "123456789"
    };
  }

  public static getInstance(): ExampleConfiguration {
    if (!ExampleConfiguration.instance) {
      ExampleConfiguration.instance = new ExampleConfiguration();
    }
    return ExampleConfiguration.instance;
  }

  public getSetting(key: string): string {
    // Get the value of the specified setting
    return this.settings[key];
  }
}

// Usage:
const config1 = ExampleConfiguration.getInstance();
console.log(config1.getSetting("apiEndpoint")); // "https://api.example.com"

const config2 = ExampleConfiguration.getInstance();
console.log(config2.getSetting("apiKey")); // "123456789"

console.log(config1 === config2); // true