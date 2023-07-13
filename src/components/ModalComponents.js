import { ModalStyle,ModalDiv} from "../styles"
import { FaStar } from "react-icons/fa";
import { Additem } from "../logics";

export function ModalComponent ({data,Modal,setModal,Bookmarks,setBookmarks}) {
    return (
        <ModalStyle>
            <ModalDiv>
                <img src={data.image_url || data.brand_image_url}/>
                <span onClick={(e)=>Additem(e,Bookmarks,setBookmarks,data)}>
                <FaStar/>
                </span>
                <p onClick={()=>setModal(!Modal)}>
                    X
                </p>
            </ModalDiv>
        </ModalStyle>
    )
}