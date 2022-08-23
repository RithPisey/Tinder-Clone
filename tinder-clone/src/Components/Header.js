import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";

function Header() {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon />
			</IconButton>
			<img
				className='header-icon'
				src='https://th.bing.com/th/id/R.eba9bf4aa5796844a0f8fd0a16d131c9?rik=Bo8qyywGN06kCw&pid=ImgRaw&r=0'
				alt='tinder-icon'
			/>
			<IconButton>
				<MessageIcon />
			</IconButton>
		</div>
	);
}

export default Header;
