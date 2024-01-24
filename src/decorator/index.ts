import BoxDecorator from "./BoxDecorator";
import LineNumberDecorator from "./LineNumberDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./Strings";
const strs = new Strings();
strs.add("Hello!!");
strs.add("My name is Inhoo");
strs.add("Design-Pattern is Powerful");

const domPre = document.querySelector("pre");
// strs.print(domPre);

const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);

const d2 = new LineNumberDecorator(d1);
// d2.print(domPre);

const d3 = new BoxDecorator(d2);
d3.print(domPre);
