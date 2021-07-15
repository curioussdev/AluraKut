import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu } from '../src/components/lib/AlurakutCommons'

function ProfileSidebar (props){
 
  return(
    <Box style={{borderRadius: '50%'}}>
          <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '50%'}}/>
    </Box>
  );
};

export default function Home() {

  const usuario = `programador-curioso`;

  return (
    <>
    <AlurakutMenu />
    
    <MainGrid>
      
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuario} />
      
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
    </>
  );
}
