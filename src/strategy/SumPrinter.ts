import SumStrategy from "./SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, N: number, domOutput: Element) {
    const value = strategy.get(N);
    domOutput.textContent = `1~${N}까지의 총합 = ${value}`;
  }
}
