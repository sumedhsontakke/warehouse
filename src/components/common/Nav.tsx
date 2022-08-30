import { memo } from "react";
import { Link } from "react-router-dom";
import { Links } from './commonStyle';

function NavComponent(){
    return(
        <Links>
            <Link to="/">Home</Link>
            <Link to="/sales">Sales</Link>
            <Link to="/articles">Articles</Link>
        </Links>
    )
}

export default memo(NavComponent);