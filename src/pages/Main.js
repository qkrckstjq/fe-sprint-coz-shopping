import { MainStyle, MainContainer, CardWrapper, CardStyle } from "../styles"
import { Card } from "../components/Card"


export function Main ({list}) {
    return (
        <>
        <MainContainer>
            <MainStyle>
                <h2>상품 리스트</h2>
                <CardWrapper>
                    <Card data={list[0]}/>
                    <Card data={list[1]}/>
                    <Card data={list[2]}/>
                    <Card data={list[3]}/>
                </CardWrapper>
            </MainStyle>
            <MainStyle>
                <h2>북마크 리스트</h2>
                <CardWrapper>
                    <Card data={list[5]}/>
                    <Card data={list[6]}/>
                </CardWrapper>
            </MainStyle>
        </MainContainer>
        </>
    )
}
