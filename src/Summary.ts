import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchDataTopple } from "./MatchData";

export interface Analyzer {
  run(matches: MatchDataTopple[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchDataTopple[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
