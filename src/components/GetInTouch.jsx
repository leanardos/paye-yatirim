import React from 'react';
import { Stack } from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';

const GetInTouch = () => {
	return (
		<Stack
			component='section'
			direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{
				py: 10,
				mx: 6,
			}}>
			<Title
				text={'Bizimle temasa geçin'}
				textAlign={'center'}
			/>
			<Paragraph
				text={
					'Paye Yapı olarak iletişimin gücüne inanıyoruz.\
                    Bir fikriniz ya da öneriniz varsa bunu bizimle paylaşabilirsiniz.'
				}
				maxWidth={'sm'}
				mx={0}
				textAlign={'center'}
			/>
		</Stack>
	);
};

export default GetInTouch;
