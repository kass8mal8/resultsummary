import { Box, Typography } from "@mui/material";

const ResultCard = () => {
    return (  
        <Box className='result-card'>
            <Typography> Your Result </Typography>
            <Box className='circle' alignItems={'center'}>
                <Typography className='heading' variant='h3' sx={{ marginTop: '15px' }}>76</Typography>
                <Typography variant='body2' sx={{color: 'hsl(241, 100%, 89%)' }}>of 100</Typography>
            </Box>
            <Typography className="heading" variant='h5' my={2}>Great</Typography>
            <Typography sx={{ color: 'hsl(221, 100%, 96%)' }} >You scored higher than 65% of the people who have taken these tests.</Typography>
        </Box>
    );
}
 
export default ResultCard;