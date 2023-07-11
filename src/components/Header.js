import { HeaderStyle,Logo, LogoLink, MenuBtb} from "../styles"
import { MenuDropDown } from "./MenuDD";
import { useState } from "react";

export function Header () {
    let [isMenuClicked,setMenuClicked] = useState(false);
    const btnOnOf = () => {
        setMenuClicked(!isMenuClicked);
    }

    return (
        <HeaderStyle>
            <LogoLink to={'/'}>
                <Logo src="img/로고.png"/>
            </LogoLink>
            <MenuBtb onClick={btnOnOf}>=
            {isMenuClicked
            ? <MenuDropDown/>
            : undefined
            }
            </MenuBtb>
        </HeaderStyle>
    )
}