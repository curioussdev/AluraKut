import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';

function ProfileSidebar (props){
 
  return(
    <Box style={{borderRadius: '50%'}}>
          <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '50%'}}/>
    </Box>
  );
};

export default function Home() {

  const usuario = `programador-curioso`;
  const pessoasFavoritas = [
    'juunegreiros',
     'omariosouto',
     'peas',
     'programador-curioso',
     'marcobrunodev',
     'felipefialho'
    ]

  return (
    <>
    <AlurakutMenu />
    
    <MainGrid>
      
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuario} />
      </div>

      <div className="welcomeArea">
        <Box style={{ gridArea: 'welcomeArea'}}>
          <h1 className="title">
            Bem-vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
      </div>

      <div className="profileRelationsArea">
        <Box style={{ gridArea: 'profileRelationsArea'}}>
          Comunidade
        </Box>

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>

        <ul>
          {pessoasFavoritas.map((itemActual) => {
            return (
             <li>
               <a href={`/users/${itemActual}`} key={itemActual }>
               <img src={`https://github.com/${itemActual}.png`} />
               <span>{itemActual}</span>
              </a>
             </li>

            )
          })}
        </ul>
        </ ProfileRelationsBoxWrapper>
      </div>  
      

    </MainGrid>
    </>
  );
}
