import { CardStyle, ImgWrapper } from "../styles"
import { FaStar } from "react-icons/fa";
import { Additem } from "../logics";

export function Card ({list,data,Bookmarks,setBookmarks,Modal,setModal}) {
    const {id,type,title,sub_title,brand_name,price,discountPercentage,image_url,brand_image_url,follower} = data;

    return (
        <CardStyle
        onClick={()=>setModal({isOn:!Modal.isOn,data:data})}
        >
            <ImgWrapper>
                <img
                src={image_url || brand_image_url}
                alt='상품 준비 중'></img>
            </ImgWrapper>
            <div>
                {type === 'Product'
                ?<><p>{title}</p><p>{discountPercentage}%</p></>
                :type === 'Category'
                ?<><p>#{title}</p><p>{' '}</p></>
                :type === 'Exhibition'
                ?<><p>{title}</p><p>{' '}</p></>
                :type === 'Brand'
                ?<><p>{brand_name}</p><p>관심고객수</p></>
                :undefined}
            </div>
            <div>
                {type === 'Product'
                ?<><p>{' '}</p><p>{price}원</p></>
                :type === 'Category'
                ?<><p>{' '}</p><p>{' '}</p></>
                :type === 'Exhibition'
                ?<><p>{sub_title}</p><p>{' '}</p></>
                :type === 'Brand'
                ?<><p>{title}</p><p>{follower}</p></>
                :undefined}
            </div>
            <span
            onClick={(e)=>(Additem(e,Bookmarks,setBookmarks,data))}
            ><FaStar/></span>
        </CardStyle>
    )
}