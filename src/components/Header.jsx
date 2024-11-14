import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
//img
import headerImg from '../assets/building7.png';

const Header = ({ scrollToBottom }) => {
	const CustomBox = styled(Box)(({ theme }) => ({
		minHeight: '80vh',
		display: 'flex',
		justifyContent: 'center',
		gap: theme.spacing(2),
		paddingTop: theme.spacing(10),
		backgroundColor: '#ededed',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
		},
	}));

	const BoxText = styled(Box)(({ theme }) => ({
		flex: '1',
		paddingLeft: theme.spacing(8),
		[theme.breakpoints.down('md')]: {
			flex: '2',
			textAlign: 'center',
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
		},
	}));

	return (
		<CustomBox component='header'>
			{/*  Box text  */}
			<BoxText
				component='section'
				style={{
					alignContent: 'center',
					paddingBottom: '50px',
				}}>
				<Typography
					variant='h2'
					component='h1'
					sx={{
						fontWeight: 700,
						color: '#000',
					}}>
					Paye Yapıya Hoşgeldiniz
				</Typography>

				<Typography
					variant='p'
					component='p'
					sx={{
						py: 3,
						lineHeight: 1.6,
						color: '#000',
					}}>
					Paye Yapı olarak, kullandığımız yüksek teknoloji,
					bünyemizdeki kalifiyeli kadromuzla dünyamızın yaşanabilir
					değerlerini insanlığa sunuyoruz.
				</Typography>

				<Box>
					<Button
						component={Link}
						onClick={scrollToBottom}
						variant='outlined'
						sx={{
							px: 4,
							py: 1,
							fontSize: '0.9rem',
							textTransform: 'capitalize',
							borderRadius: 0,
							color: '#000',
							backgroundColor: 'transparent',
							borderColor: '#000',
							'&&:hover': {
								color: '#343a55',
								borderColor: '#343a55',
							},
							'&&:focus': {
								color: '#343a55',
								borderColor: '#343a55',
							},
						}}>
						Iletişim
					</Button>
				</Box>
			</BoxText>

			<Box
				sx={(theme) => ({
					[theme.breakpoints.down('md')]: {
						flex: '1',
						paddingTop: '30px',
						alignSelf: 'center',
					},
					[theme.breakpoints.up('md')]: {
						flex: '2',
						alignSelf: 'flex-end',
					},
					[theme.breakpoints.up('lg')]: {
						flex: '1',
						alignSelf: 'flex-end',
					},
				})}>
				<img
					src={headerImg}
					alt='headerImg'
					style={{
						width: '100%',
					}}
				/>
			</Box>
		</CustomBox>
	);
};

export default Header;
