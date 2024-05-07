import { Box, Typography } from '@mui/material'
import './styles/css/index.css'
import ResultCard from './components/ResultCard';
import Summary from './design/Summary';
// import ResultCard from './components/ResultCard';
import data from './data.json'
import reaction from "./assets/images/icon-reaction.svg"

const App = () => {
  return (  
    <Box className='container'>
      <ResultCard />
      <Summary />
    </Box>
  );
}
 
export default App;