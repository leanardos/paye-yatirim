import React from 'react';
import { Box, Stack, styled } from '@mui/material';
import Link from '@mui/material/Link';
import FooterText from './FooterText';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import imgDetail from '../../assets/newFullLogo.png';

const Footer = () => {
	const StackColumn = styled(Stack)(() => ({
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1,
		gap: 8,
		textAlign: 'center',
	}));

	const BoxRow = styled(Box)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#ededed',
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: 30,
		},
	}));

	return (
		<>
			<BoxRow
				component='footer'
				sx={{
					py: 4,
					px: 2,
				}}>
				<StackColumn>
					<PlaceIcon fontSize='large' />
					<FooterText text={'Ayazağa Mah. Kemerburgaz Cad.'} />
					<FooterText text={'Vadi İstanbul Park Sitesi 7B Blok'} />
					<FooterText text={'No:7C İç Kapı No:34 Sarıyer/İstanbul'} />
				</StackColumn>

				<StackColumn>
					<LocalPhoneIcon fontSize='large' />
					<FooterText text={'(+90) 212 876 5273'} />
					<FooterText text={'(+90) 212 876 1273'} />
				</StackColumn>

				<StackColumn>
					<EmailIcon fontSize='large' />
					<FooterText
						text={'info@payeyatirim.com'}
						capitalize={false}
					/>
				</StackColumn>

				<StackColumn>
					<AccessTimeIcon fontSize='large' />
					<FooterText text={'Pt - Cu : 09:00 - 18:00'} />
					<FooterText text={'Cts : 09:00 - 13:00'} />
				</StackColumn>
			</BoxRow>
			<Divider />
			<BoxRow
				component='footer'
				sx={{
					py: 8,
					px: 4,
				}}>
				<StackColumn>
					<FooterText text={'© 2024 Tüm Hakları Saklıdır'} />
				</StackColumn>
				<StackColumn>
					<img
						src={imgDetail}
						alt=''
						style={{ width: '200px' }}
					/>
				</StackColumn>
				<StackColumn>
					<Stack
						direction='row'
						width='70px'
						maxWidth='100%'
						justifyContent='space-between'>
						<Link
							href='#'
							variant='body2'
							sx={{
								color: '#414141',
								'&:hover': {
									color: '#1c2859',
								},
							}}>
							<InstagramIcon fontSize='large' />
						</Link>
						<Link
							href='#'
							variant='body2'
							sx={{
								color: '#414141',
								'&:hover': {
									color: '#1c2859',
								},
							}}>
							<LinkedInIcon fontSize='large' />
						</Link>
						<Link
							href='#'
							variant='body2'
							sx={{
								color: '#414141',
								'&:hover': {
									color: '#1c2859',
								},
							}}>
							<FacebookIcon fontSize='large' />
						</Link>
					</Stack>
				</StackColumn>
			</BoxRow>
		</>
	);
};

export default Footer;
