import { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "../images/default";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconBtn } from "../button/iconBtn";

export type ImgSlidePropsType = {
    images:string[]
};


export const ImgSlide: React.FunctionComponent<ImgSlidePropsType> = (props) => {
    return (
		<Container>
			<Img
				src="http://via.placeholder.com/100x100"
			/>
			<IconBtn
				icons={<NavigateBeforeIcon/>}
			/>
			<IconBtn
				icons={<NavigateNextIcon/>}
			/>
		</Container>
    );
};

type StyledProps = {
};

const Container = styled.div``;