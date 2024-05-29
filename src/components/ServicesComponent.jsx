import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
import imgDetail from '../assets/service.png';


const ServicesComponent = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Huzurla yaşanacak evler üretiyoruz'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Hızla gelişen ve değişen dünyanın ihtiyaçlarına çağın son teknolojileriyle çözüm üretiyor; altyapı projelerimizle şehirleri ve ülkeleri yarının dünyasıyla bugünden tanıştırıyoruz.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

        </Grid>
    )
}

export default ServicesComponent;