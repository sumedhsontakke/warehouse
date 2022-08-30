import { AddProductContainer } from "./AddProductContainer";
import Alert from 'react-bootstrap/Alert';
import Text from "../../components/common/Text";
import { FormContainer } from "./FormContainer";
import Form from 'react-bootstrap/Form';
import CustomButton from "../../components/common/Button";
import { AddMoreIcon } from "./AddMoreIcon";
import { IAddProductProps, IArticle, IRequiredArticleState } from "../../misc/interfaces";


function AddProductComponent(props:IAddProductProps){    
    return(
        <>
            <AddProductContainer>
                {
                    props.alert.show &&
                    <Alert 
                        key={props.alert.variant} 
                        variant={props.alert.variant} 
                        onClose={() => { console.log("sdfsdf"); props.setAlert({...props.alert, show: false})}} 
                        dismissible
                    >
                        {props.alert.message}
                    </Alert>
                }
                <Text fontSize={"24px"} fontWeight={600} margin={"0px 0px 30px 0"}>Add Product</Text>
                <FormContainer>
                    <Form onSubmit={props.submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={props.setProduct} style={{borderRadius: 0}} type="text" placeholder="Enter Product Name" value={props.product} />
                        </Form.Group>                 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add Articles</Form.Label>
                        </Form.Group>
                        {
                            props.requiredArticles.map((articleSelect:IRequiredArticleState, index) => 
                                <div style={{marginBottom: "20px"}} key={index}>
                                    <Form.Select key={index} style={{borderRadius: 0}} aria-label="Select Articles" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> props.addRequiredArticle(e, "articleType", index)}>
                                        <option selected={articleSelect.id === ""}>Select Article</option>
                                        {
                                            props.allArticles && props.allArticles.map((article:IArticle, index: number) => 
                                                <option  
                                                    key={index} 
                                                    value={article.id}
                                                    selected={articleSelect.id === article.id}
                                                >
                                                    {`${article.name} = Remaining Articles: ${article.amountInStock}`}
                                                </option> 
                                            )
                                        }
                                    </Form.Select>
                                    <Form.Control onChange={(e: React.ChangeEvent<HTMLInputElement>)=> props.addRequiredArticle(e, "input", index)} style={{borderRadius: 0}} type="number" placeholder="Enter Quantity" value={articleSelect.amountRequired ? articleSelect.amountRequired : ""} />
                                </div>
                            )
                        }
                        <AddMoreIcon onClick={() => props.addRequiredArticle(null, "", 0)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={"24"} height={"24"} fill="currentColor" className={"bi bi-plus"} viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </AddMoreIcon>                    
                        <CustomButton type="submit" margin={"30px 0 0 0"}>Submit</CustomButton>                        
                    </Form>
                </FormContainer>
            </AddProductContainer>
        </>
    )
}

export default AddProductComponent;