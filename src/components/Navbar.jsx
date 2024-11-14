import React from 'react';
import {
	AppBar,
	Toolbar,
	Box,
	List,
	ListItem,
	Typography,
	styled,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import DrawerItem from './DrawerItem';
import { Link } from 'react-router-dom';
import imgDetail from '../assets/logo-white.png';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const itemList = [
	{
		text: 'Ana Sayfa',
		to: '/',
	},
	{
		text: 'Hakkımızda',
		to: '/about',
	},
	{
		text: 'Hizmetler',
		to: '/services',
	},
	// {
	//     text: "Iletişim",
	//     to: "/contact"
	// }
];

const Navbar = () => {
	let navigate = useNavigate();

	return (
		<AppBar
			component='nav'
			position='sticky'
			sx={{
				backgroundColor: '#ededed',
			}}
			elevation={0}>
			<StyledToolbar>
				<Typography
					variant='h6'
					component='h2'>
					<img
						src={imgDetail}
						alt=''
						style={{
							width: '170px',
							paddingTop: '10px',
							cursor: 'pointer',
						}}
						onClick={() => navigate('/')}
					/>
				</Typography>
				<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
					<DrawerItem />
				</Box>
				<ListMenu>
					{itemList.map((item) => {
						const { text } = item;
						return (
							<ListItem key={text}>
								<ListItemButton
									component={Link}
									to={item.to}
									sx={{
										color: '#000',
										'&:hover': {
											backgroundColor: 'transparent',
											transform: 'scale(1.1)',
											transition:
												'transform .2s ease-in-out',
										},
										minWidth: '120px',
									}}>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						);
					})}
				</ListMenu>
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
