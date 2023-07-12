import { Card } from "../components/Card"
import { useState } from "react";
import { FilterWrapper,CardWrapper} from "../styles"
import { filter } from "../logics";




export function Productlist ({list,Bookmarks,setBookmarks,Modal,setModal}) {
    const [filtering, setfiltering] = useState(list);

    return (
        <>
            <FilterWrapper>
                <div
                onClick={()=>filter('all',list,setfiltering)}
                >전체</div>
                <div
                onClick={()=>filter('Product',list,setfiltering)}>상품</div>
                <div
                onClick={()=>filter('Category',list,setfiltering)}>카테고리</div>
                <div
                onClick={()=>filter('Exhibition',list,setfiltering)}>기획전</div>
                <div
                onClick={()=>filter('Brand',list,setfiltering)}>브랜드</div>
            </FilterWrapper>
                <CardWrapper>
                    {filtering.map(el=>{
                        return (
                            <Card
                            key={el.id}
                            list={list}
                            data={el}
                            Bookmarks={Bookmarks}
                            setBookmarks={setBookmarks}
                            Modal={Modal}
                            setModal={setModal}
                            />
                        )
                    })}
                </CardWrapper>
        </>
    )
}