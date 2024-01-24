export default class King {
  private constructor() {
    //private으로 constructor를 지정하면 오직 한개만 생성할 수 있다.
  }
  private static instance: King | undefined; // 오직 자기 자신만이 이 필드에 접근할 수 있음.
  static getInstance(): King {
    if (this.instance === undefined) {
      this.instance = new King();
    }
    return this.instance;
  }

  sayHello() {
    console.log("I am only one...");
  }
}
