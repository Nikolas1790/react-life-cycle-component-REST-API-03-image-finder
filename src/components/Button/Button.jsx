import { BtnLoadMore, BtnWrapper } from "./Button.styled"

export const Button = ({handleLoaderMore}) => {
    return (
        <BtnWrapper>
            <BtnLoadMore type="button" className="button" onClick={handleLoaderMore}>Load more</BtnLoadMore>
        </BtnWrapper>
    )
}

