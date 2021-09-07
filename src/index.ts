import { HtmlReport } from "./reportTargets/HtmlReport";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");

// const summary = new Summary(new WinsAnalysis(`Bournemouth`), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport(`Man United`);

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
