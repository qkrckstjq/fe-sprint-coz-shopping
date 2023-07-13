import { FilterWrapper,CardWrapper} from "../styles"
import { Card } from "../components/Card"
import { useState } from "react"
import { filter } from "../logics";

export function Bookmark ({list,Bookmarks,setBookmarks,Modal,setModal}) {
    const [filtering, setfiltering] = useState(Bookmarks);

    return (
        <>
            <FilterWrapper>
                <div
                onClick={()=>filter('all',Bookmarks,setfiltering)}
                >전체</div>
                <div
                onClick={()=>filter('Product',Bookmarks,setfiltering)}>상품</div>
                <div
                onClick={()=>filter('Category',Bookmarks,setfiltering)}>카테고리</div>
                <div
                onClick={()=>filter('Exhibition',Bookmarks,setfiltering)}>기획전</div>
                <div
                onClick={()=>filter('Brand',Bookmarks,setfiltering)}>브랜드</div>
            </FilterWrapper>
                <CardWrapper
                style={{
                    minHeight:'720px'
                }}
                >
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