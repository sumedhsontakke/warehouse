import { AxiosResponse } from "axios";
import { IProduct } from "../misc/interfaces";
export const product: IProduct[] = [
    {
      "id": "a269a247-0d38-4b47-9630-79c9ae545b68",
      "name": "Dining Chair",
      "requiredArticles": [
        {
          "id": "0517f083-0e15-4876-8d1f-6fa45900431c",
          "amountRequired": 4
        },
        {
          "id": "831b92b8-677b-42cc-a585-335ea4ccccb6",
          "amountRequired": 1
        },
        {
          "id": "addc65a8-c759-41d8-a18a-89fe446ad484",
          "amountRequired": 8
        }
      ]
    }
  ];


export const mockresponse: AxiosResponse = {headers: {}, config: {}, statusText: "", status: 100, data: product};

export const salesMockResponse: AxiosResponse = {headers: {}, config: {}, statusText: "", status: 100,
     data:[
        {
          "id": "da5846e7-ba53-4189-b062-81fc64582431",
          "createdAt": "2020-11-13T12:00:00.123",
          "productId": "a269a247-0d38-4b47-9630-79c9ae545b68",
          "amountSold": 1
        }
     ] 
};

export const articleMockResponse: AxiosResponse = {headers: {}, config: {}, statusText: "", status: 100,
    data:[
        {
            "id": "0517f083-0e15-4876-8d1f-6fa45900431c",
            "name": "Leg",
            "amountInStock": 12
        },
    ] 
};

export const  SalesProps = {
    salesDetail: [
        {
            "id": "da5846e7-ba53-4189-b062-81fc64582431",
            "createdAt": "2020-11-13T12:00:00.123",
            "productId": "a269a247-0d38-4b47-9630-79c9ae545b68",
            "amountSold": 1,
            "name": "test"
          },
    ],
    isLoading: false,
    productList: null
}

export const articleComponentProps = {
    articles: [
        {
            id: "testID",
            name: "article name",
            amountInStock: 5,  
            amountToSubtract: 2,
            amountRequired: 4
        }
    ],
    updateArticle: () =>{},
    setArticles: () => {}
}

export const productDetailsProps = {
    "id": "a269a247-0d38-4b47-9630-79c9ae545b68",
    "name": "Dining Chair",
    "articles": [
        {
            "id": "0517f083-0e15-4876-8d1f-6fa45900431c",
            "amountRequired": 4,
            "amountInStock": 2,
            "name": "article 1"
        },
        {
            "id": "831b92b8-677b-42cc-a585-335ea4ccccb6",
            "amountRequired": 5,
            "amountInStock": 1,
            "name": "article 2"
        },
    ],
    "requiredArticles": [
        {
          "id": "0517f083-0e15-4876-8d1f-6fa45900431c",
          "amountRequired": 4
        },
    ],
    saleProduct : () =>{
        
    }
        
}

export const mockForValidate = {
    product: "test",
    requiredArticles: [{"id":"0517f083-0e15-4876-8d1f-6fa45900431c","amountRequired":12}],
    allArticles: [{"id":"0517f083-0e15-4876-8d1f-6fa45900431c","name":"Patched Leg","amountInStock":12},{"id":"addc65a8-c759-41d8-a18a-89fe446ad484","name":"Screw","amountInStock":41},{"id":"831b92b8-677b-42cc-a585-335ea4ccccb6","name":"Seat","amountInStock":8},{"id":"6892b98b-9b87-4520-9a9e-7528f1d78cb4","name":"Table Top","amountInStock":12},{"id":"41a84cdc-c70b-4924-9907-319572a45ca3","name":"Leg","amountInStock":12}]
}