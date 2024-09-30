import { ReactNode } from "react";

interface Props {
    children: ReactNode
    // any props that come into the component
}

function NavItem({children}: Props){
    return <a href="" className="hover:font-bold hover:translate-y-[-2px] transition-all duration-150 ease-out">{children}</a>
}


export default NavItem;