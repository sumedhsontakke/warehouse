import { memo } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { ICustomButton } from "../../misc/interfaces";
const ButtonStyle = styled(Button)`
    border-radius: 0px;
    ${props => props.width && `width: ${props.width};` }
    ${props => props.margin && `margin: ${props.margin};` }
`;

function CustomButton(props:ICustomButton){
    return <ButtonStyle {...props} />
}

export default memo(CustomButton);