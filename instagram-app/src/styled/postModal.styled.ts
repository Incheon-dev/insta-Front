import styled from "styled-components";
export const PostModalContainer = styled.div`
    width: 900px;
    background-color: #fff;
    display: flex;
    z-index:100;
	border-radius:10px;
	flex-direction:column;
`;
export const PostModalHeader = styled.div`
	border-bottom:1px solid #ddd;
	text-align:center;
	font-size:16px;
	width: 100%;
	font-weight:600;
	padding:10px;
`;
export const PostModalBody = styled.div`
	display:flex;
	flex-direction:column;
	width:100%;
	padding:10px;
	height:60vh;
	align-items:center;
	justify-content:center;
`;
export const IconWrap = styled.div`
	position:relative;
`
export const IconDiv = styled.div`
	background-color:#fff;
	overflow:hidden;
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-20%) translateY(-50%);
    z-index: 10;
	width:60px;
	height:60px;
`