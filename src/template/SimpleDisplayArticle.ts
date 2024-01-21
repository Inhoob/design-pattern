import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
  constructor(article: Article) {
    super(article);
  }

  protected titleHtml() {
    return `<h1>${this.article.getTitle()}</h1>`;
  }

  protected contentHtml() {
    const items = this.article.getContent().map((item) => `<li>${item}</li>`);
    return `<ul>${items.join("")}</ul>`;
  }

  protected footerHtmml() {
    return `<p>${this.article.getFooter()}</p>`;
  }
}
