import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  protected titleHtml(): string {
    return `<div>
    <span>제목</span>
    <input value = ${this.article.getTitle()}>
    </div>`;
  }
  protected contentHtml(): string {
    const items = this.article.getContent().map((item) => {
      return `${item}\n`;
    });
    return `<span>내용</span><br/><textarea cols='50' rows='5'>${items.join(
      ""
    )}</textarea>`;
  }
  protected footerHtmml(): string {
    return `<div><span>템플릿</span><input value = ${this.article.getFooter()}></div>`;
  }
  constructor(protected article: Article) {
    super(article);
  }
}
