import { CardStyle } from "../styles"
import { FaStar } from "react-icons/fa";
import { Carteditem } from "../Carteditems/Carteditems";
import { useState,isExist } from "react";

export function Card ({data}) {
    const {id,type,title,sub_title,brand_name,price,discountPercentage,image_url,brand_image_url,follower} = data;
    const [bookmark,setbookmark] = useState(false);
    const AddCartitem = (e) => {
        setbookmark(!bookmark)
        if(bookmark) {
            e.target.style.color = '#eee'
        } else {
            e.target.style.color = 'yellow'
        }
        Carteditem.push({
            id : id,
            type : type,
            title : title,
            sub_title : sub_title,
            brand_name: brand_name,
            price : price,
            discountPercentage : discountPercentage,
            image_url : image_url,
            brand_image_url,
            follower:follower,
        })
        console.log(Carteditem)
    }

    return (
        <CardStyle>
            <img src={image_url || brand_image_url} alt='상품 준비 중'></img>
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
            onClick={(e)=>AddCartitem(e)}
            ><FaStar/></span>
            <span>
                
            </span>
        </CardStyle>
    )
}