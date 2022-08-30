import Logo from '../../assets/images/sample-logo.png';
import { Image } from './commonStyle';

function LogoComponent(){
    return(
        <Image src={Logo} alt="logo" />
    )
}

export default LogoComponent;