import { memo } from "react"
import styled from "styled-components";
import { IText } from "../../misc/interfaces";

export const TextStyle = styled.div`
    ${(props: IText) => props.fontSize && `font-size: ${props.fontSize};`  }
    ${(props: IText) => props.fontWeight && `font-weight: ${props.fontWeight};`  }
    ${(props: IText) => props.color && `color: ${props.color};`  }
    ${(props: IText) => props.margin && `margin: ${props.margin};`  }
`;

function Text(props: IText){
    return(
        <TextStyle {...props}  />
    )
}

export default memo(Text);