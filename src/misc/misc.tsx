import { IRequiredArticleState, IArticle } from "./interfaces";
export const validate = (
    product: string,
    requiredArticles: IRequiredArticleState[],
    allArticles: IArticle[]
): string => {

    let validateResult = ""
    requiredArticles.map(article => {
        if (article.id === "") {
            validateResult = "Select article";
        } else if (article.amountRequired === 0) {
            validateResult = "Enter article amount";
        }
        const filteredArticle: IArticle[] = allArticles.filter((_article: IArticle) => _article.id === article.id);
        console.log(filteredArticle);
        if (
            filteredArticle.length > 0 &&
            filteredArticle[0].amountInStock &&
            article.amountRequired &&
            filteredArticle[0].amountInStock < article.amountRequired
        ) {
            validateResult = "Entered article quantity not available, please add article";
        }
    });
    if (product == "") {
        validateResult = "Enter product name";
    }

    const uniqueIds = new Set(requiredArticles.map(article => article.id));
    if (uniqueIds.size < requiredArticles.length) {
        validateResult = "Select unique Articles";
    }

    return validateResult;
}