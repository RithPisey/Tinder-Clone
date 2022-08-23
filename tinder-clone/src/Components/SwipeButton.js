import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

function SwipeButton() {
	return (
		<div className='swipeIcon'>
			<IconButton className='swipeButton_Repeat'>
				<ReplayIcon />
			</IconButton>
			<IconButton className='swipeButton_Left'>
				<CloseIcon />
			</IconButton>
			<IconButton className='swipeButton_Love'>
				<StarIcon />
			</IconButton>
			<IconButton className='swipeButton_Right'>
				<FavoriteIcon />
			</IconButton>
			<IconButton className='swipeButton_Lightening'>
				<FlashOnIcon />
			</IconButton>
		</div>
	);
}

export default SwipeButton;
