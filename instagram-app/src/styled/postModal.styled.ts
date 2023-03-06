import styled from "styled-components";

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
    ::-webkit-scrollbar : none;
`
export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1.5px solid #ddd;
    width: 450px;
`;
export const PostCardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
`;
export const PostCardHeaderTitle = styled.p`
    font-weight: bold;
    font-size: 16px;
`;
export const PostThumbnailWrap = styled.div`
    width: 20px;
    height: 20px;
`;
export const PostCardImageWrap = styled.div``;
export const PostCardIconToolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const PostCardContent = styled.div`
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
`;
export const PostCardComentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
`;
export const PostContentBoxLimitText = styled.p`
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
`;
export const PostContentBoxText = styled.p`
    font-size: 14px;
    margin: 0;
    padding: 0;
`;
export const LeftIconArea = styled.div`
    display: flex;
`;
export const RightIconArea = styled.div`
    display: flex;
    justify-content: end;
`;
export const PostCommentBox = styled.div`
    display: flex;
    border-top: 1px solid #ddd;
`;
export const Posttime = styled.div`
    font-size: 11px;
    color: #aaa;
    padding: 10px;
`;
export const PostComment = styled.div`
    display:flex;
    align-items: center;
    gap:0 5px;
    margin-bottom:10px;
`
export const CommentUserImgWrap = styled.div`
    display:flex;
    align-items:center;
`
export const CommentTextBox = styled.div`
    display:flex;
    flex-direction:column;
`
export const CommentTextUserInfo = styled.div`
    display:flex;
    align-items:center;
`

export const CommentUserName = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin-right:5px;
`
export const CommentText = styled.p`
    margin:0;
    font-size:14px;
`
export const CommentRegDate = styled.p`
    font-size:10px;
    color:#999;
    margin:0;
`