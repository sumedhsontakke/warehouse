import { memo } from "react"
import { IArticlesProps, IArticleComponentProps  } from '../../misc/interfaces';
import { useNavigate } from "react-router-dom";
import { ProductContent } from "../home/ProductContent";
import Form from 'react-bootstrap/Form';
import CustomButton from "../../components/common/Button";

function ArticleComponent(props: IArticleComponentProps){
    const navigate = useNavigate();
    return(
        <ProductContent
        >
            <span>{props.article.name}</span>
            <span>Stock: {props.article.amountInStock}</span>
            <div>
                <Form.Group  controlId="formBasicEmail">
                        <Form.Label>Add new article quantity</Form.Label>
                        <Form.Control 
                            style={{borderRadius: 0}} 
                            type="number" 
                            placeholder="Article quantity" 
                            value={props.article.inputValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> props.setArticles(e.target.value, props.articleIndex)} 
                        />
                        <CustomButton 
                            type="submit" 
                            margin={"30px 0 0 0"} 
                            onClick={() => props.updateArticle(props.articleIndex)}
                        >Submit</CustomButton>    
                </Form.Group>               
            </div>
        </ProductContent>
    )
}

export default memo(ArticleComponent);