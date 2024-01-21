import Article from "./Article";
export default abstract class DisplayArticleTemplate {
  constructor(protected article: Article) {}

  public readonly displayHtml = () => {
    //파생클래스에서 사용할 수 없도록 readonly 처리
    return `
    ${this.titleHtml()}
    ${this.contentHtml()}
    ${this.footerHtmml()}
    `;
  };

  protected abstract titleHtml(): string;
  protected abstract contentHtml(): string;
  protected abstract footerHtmml(): string;
}
