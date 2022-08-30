import { memo } from "react"
import styled from "styled-components";
import { IFlexWrap } from "../../misc/interfaces";

export const FlexWrapStyle = styled.div`
    display: flex;
    ${(props: IFlexWrap) => props.flexDirection && `flex-direction: ${props.flexDirection};`  }
`;

function Text(props: IFlexWrap){
    return(
        <FlexWrapStyle {...props}  />
    )
}

export default memo(Text);