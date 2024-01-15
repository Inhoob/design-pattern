import Array from "./Array";
import Item from "./item";

const items = [
  new Item("Item 1", 100),
  new Item("Item 2", 200),
  new Item("Item 3", 300),
];

const array = new Array(items);
const iter = array.iterator();
while (iter.next()) {
  const item = iter.current();
  const domItem = document.createElement("div");
  domItem.textContent = `${item.name} - ${item.cost}`;
  document.body.appendChild(domItem);
  domItem.classList.add("iterator-item");
}
