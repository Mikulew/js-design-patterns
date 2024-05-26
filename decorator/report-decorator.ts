interface IReport {
  getData(): Record<number, number>;
  generate(): void;
}

class BasicReport implements IReport {
  constructor(private _data: Record<number, number>) {}

  public getData(): Record<number, number> {
    return this._data;
  }

  public generate(): void {
    console.log('Generating basic report...');
  }
}

class ReportWithCharts implements IReport {
  private report: IReport;

  constructor(report: IReport) {
    this.report = report;
  }

  public getData(): Record<number, number> {
    return this.report.getData();
  }

  public generate(): void {
    this.report.generate();

    console.log('Adding charts to report...');
    const data = this.report.getData();
    // Use data to generate charts...
  }
}

class ReportWithTables implements IReport {
  private report: IReport;

  constructor(report: IReport) {
    this.report = report;
  }

  public getData(): Record<number, number> {
    return this.report.getData();
  }

  public generate(): void {
    this.report.generate();

    console.log('Adding tables to report...');
    const data = this.report.getData();
    // Use data to generate the tables...
  }
}

const now = Date.now();
const sampleData = {
  [now-2]: 123,
  [now-1]: 456,
  [now]: 789,
};

const report: IReport = new ReportWithCharts(
  new ReportWithTables(new BasicReport(sampleData))
);

report.generate();
/*
 * // OUTPUT:
 *    Generating basic report...
 *    Adding tables to report...
 *    Adding charts to report...
 */

