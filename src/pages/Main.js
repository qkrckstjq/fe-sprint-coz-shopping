import { MainStyle } from "../styles"
import { Card } from "../components/Card"


export function Main ({list}) {
    return (
        <>
            <MainStyle>
                <h2>상품 리스트</h2>
                <Card data={list[0]}></Card>
            </MainStyle>
            <MainStyle>
                <h2>북마크 리스트</h2>
            
            </MainStyle>
        </>
    )
}