import SumPrinter from "./SumPrinter";
import LoopSumStrategy from "./LoopSumStrategy";
import GaussSumStrategy from "./GaussSumStrategy";

const printer = new SumPrinter();

const dom1 = document.createElement("h1");
document.body.append(dom1);
const dom2 = document.createElement("h2");
document.body.append(dom2);

printer.print(new LoopSumStrategy(), 100, dom1);
printer.print(new GaussSumStrategy(), 100, dom2);
