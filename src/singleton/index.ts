import King from "./King";

// const king = new King(); 이렇게 쓸 수없다.. 생성자가 private이기 때문에.
const king = King.getInstance();
king.sayHello();
