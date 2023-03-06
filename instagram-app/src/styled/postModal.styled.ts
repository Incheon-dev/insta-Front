import styled from "styled-components";

type styledProps = {
    visible: boolean;
};

export const PostModalContainer = styled.div`
    width: 900px;
    background-color: #fff;
    display: flex;
    align-items: center;
    z-index:100;
`;
export const PostImageWrap = styled.div`
    width:450px;
    display:flex;
    position:relative;
`;
export const PostRatioBox = styled.div`
    padding-top:100%;
    width:100%;
    overflow:hidden;
    & > img{
        position:absolute;
        left:0;
        top:0;
    }
`;
export const PostContentWrap  = styled.div`
    width:450px;

`;
export const PostListWrap = styled.div`
    height:296px;
    overflow-y:auto;
    padding:10px;
    box-sizing:border-box;
`