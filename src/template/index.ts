import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

const article = new Article("제목", ["문자1", "문자2", "문자3"], "footer");

const display = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener("change", (event) => {
  let display;
  if ((<HTMLInputElement>event.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }
  document.querySelector(".content").innerHTML = display.displayHtml();
});
