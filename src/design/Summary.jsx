import { Box, Button, Stack, Typography } from "@mui/material";
import reaction from '../assets/images/icon-reaction.svg'
import memory from '../assets/images/icon-memory.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'
// import data from "../data.json"

const Summary = () => {
    const data = [
        {
          "category": "Reaction",
          "score": 80,
          "icon": reaction
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": memory
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": verbal
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": visual
        }
    ]
      
    console.log(data)
    return (  
        <Box className='summary'>
            <Typography variant='h6' className='heading' sx={{ color: 'hsl(224, 30%, 27%)' }}>Summary</Typography>
            <ul>
                {data?.map( result => (
                    <li key={result.category}>
                        <Stack direction='row' spacing={10}>
                            <Stack direction='row' spacing={2} className='description'>
                                <img src={result.icon} alt={'alternativetext'} />
                                <Typography sx={{ color: 'hsl(0, 100%, 67%)' }}> {result.category}</Typography>
                            </Stack>
                            <Stack className='scores' direction='row' spacing={1} sx={{width: '50%'}}>
                                <Typography 
                                    sx={{
                                        color: 'hsl(224, 30%, 27%)', 
                                        fontWeight: 'bold',
                                    }}
                                    >{result.score} 
                                </Typography>
                                <Typography sx={{color: 'hsl(224, 30%, 27%)'}}>/ 100</Typography>
                            </Stack>
                        </Stack>
                    </li>
                ))}
            </ul>

            <Button 
                className="btn" 
                variant='contained' 
                disableElevation
                fullWidth
            >continue
            </Button>
        </Box>
    );
}
 
export default Summary;