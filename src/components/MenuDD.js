import { Link } from "react-router-dom";
import { DropDown,Triangle,MenuLink} from "../styles"
import {FaRegCircle,FaGift,FaStar} from 'react-icons/fa';
export function MenuDropDown () {
    return (
        <>
        <DropDown>

            <MenuLink>
                <p style={{justifyContent:'center',padding:0}}>
                <FaRegCircle/>
                <FaRegCircle/>
                <FaRegCircle/>
                ,님 안녕하세요</p>
            </MenuLink>            
            
            <MenuLink to={'/products/list'}>
                <p>
                <FaGift style={{marginRight:'1rem'}}/>
                상품리스트 페이지
                </p>
            </MenuLink>
            
            <MenuLink to={'/bookmark'}>
                <p>
                <FaStar style={{marginRight:'1rem'}}/>
                북마크 페이지
                </p>
            </MenuLink>
            
        </DropDown>
        <Triangle>
        </Triangle>        
        </>
    )
}
