import {MainContainer, CardWrapper} from "../styles"
import { Card } from "../components/Card"

export function Main ({list,Bookmarks,setBookmarks,Modal,setModal}) {
    
    const RenderingList = () => {
        const result = [];
        for(let i = 0; i < 4; i++){
            if(list[i]!==undefined){
                result.push(list[i]);
            }
        }
        return result;
    }

    const RenderingBookmark = () => {
        const result = [];
        for(let i = 0; i < 4; i++){
            if(Bookmarks[i]!==undefined){
                result.push(Bookmarks[i]);
            }
        }
        return result;
    }


    return (
        <>
        <MainContainer>
                <h2>상품 리스트</h2>
                <CardWrapper>
                    {RenderingList().map(el=>{
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
                <h2>북마크 리스트</h2>
                <CardWrapper>
                    {RenderingBookmark().map(el=>{
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
            
        </MainContainer>
        </>
    )
}
