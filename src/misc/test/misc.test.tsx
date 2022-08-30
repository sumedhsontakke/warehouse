
import { mockForValidate } from "../../mock";
import { validate } from "../misc";

describe('Validate function' , () =>{        
    it('should get no message if all values are correct', () => {
        const resp = validate(mockForValidate.product, mockForValidate.requiredArticles,mockForValidate.allArticles  );
        expect(resp).toBe("");
    });

    it('Should get error for name', () => {
        const resp = validate("", mockForValidate.requiredArticles,mockForValidate.allArticles  );
        expect(resp).toBe("Enter product name");
    }); 

    it('Should get error for amountRequired', () => {
        const resp = validate(mockForValidate.product, [{"id":"0517f083-0e15-4876-8d1f-6fa45900431c","amountRequired": 0}],mockForValidate.allArticles  );
        expect(resp).toBe("Enter article amount");
    });
    
    it('Should get error for article', () => {
        const resp = validate(mockForValidate.product, [{id: "","amountRequired": 2}],mockForValidate.allArticles  );
        expect(resp).toBe("Select article");
    });
});