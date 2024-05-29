import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
import imgDetail from '../assets/file.png';
import imgDetail2 from '../assets/building6.png';
import imgDetail3 from '../assets/construction.png';


const GetStarted = () => {

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
              <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

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
                        'Yaşama, Kalıcı Eserler Armağan Ediyoruz'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    İlkelerimizi sürdürülebilir kılmak ve geliştirmek için bilimsel yöntem ve teknolojileri, yasal mevzuat ve yönetmeliklerin gereklerini yerine getirecek şekilde kullandık.
                    Şirketimiz bünyesindeki tüm faaliyetlerin uygulanması, geliştirilmesi ve sürekli iyileştirilmesi için takım ruhunu benimseyen, özveri ile çalışan ekibimiz ve elemanlarımız kalitemizin mimarlarıdır.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
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
                        'Güvenilir Projeler Tasarlıyoruz'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Müşterilerimizin ihtiyaçlarını ve beklentilerini karşılayan güvenilir projeler tasarlıyoruz. 
                    Yüksek kalite standartları ve titiz çalışma prensiplerimizle projelerinizi zamanında ve bütçenize uygun şekilde tamamlıyoruz.
                    Güvenilir ve sağlam yapılar inşa ederek, sizin ve sevdiklerinizin güvenliğini ön planda tutuyoruz.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail2} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail3} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Yenilikçi Çözümler Sunuyoruz'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Modern mimari ve yenilikçi inşaat teknikleri ile projelerinizi hayata geçiriyoruz. 
                    Her projede, çevre dostu malzemeler ve sürdürülebilir yöntemler kullanarak, geleceğe değer katıyoruz. 
                    Teknoloji ve estetiği bir araya getirerek, benzersiz yaşam alanları ve iş yerleri yaratıyoruz.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;