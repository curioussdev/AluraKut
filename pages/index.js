import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';


export default function Home() {
  return (
    <MainGrid>
      
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box >
          <img src="https://github.com/programador-curioso.png" style={{borderRadius: '50%'}}/>
        </Box>
      </div>

      <div className="welcomeArea">
        <Box style={{ gridArea: 'welcomeArea'}}>
          Bem-vindo
        </Box>
      </div>

      <div className="profileRelationsArea">
        <Box style={{ gridArea: 'profileRelationsArea'}}>
          Comunidade
        </Box>

        <Box>
          Pessoas da comunidade
        </Box>
      </div>  
    
    </MainGrid>

  );
}
