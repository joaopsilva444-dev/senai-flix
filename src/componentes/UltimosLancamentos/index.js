import styled from 'styled-components'
import michael from '../../imagens/Filmes/Michael.png'
import panico from '../../imagens/Filmes/panico.png'
import backrooms from '../../imagens/Filmes/Backrooms.png'
import todo from '../../imagens/Filmes/todo mundo em panico.png'
const lancamentos = [
{ nome: 'Michael', id: 1, src: michael },
{ nome: 'Panico 7', id: 2, src: panico },
{ nome: 'Backrooms', id: 3, src: backrooms },
{ nome: 'Todo mundo em panico 6', id: 4, src: todo }
]
const LancamentosContainer = styled.section`
background-color: #b272ff;
padding: 50px 0;
text-align: center;
`
const Titulo = styled.h2`
color: #610975;
font-size: 32px;
`
const Filmes = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
`
const FilmeCard = styled.div`
background-color: #3f0182;
width: 180px;
padding: 20px;

border-radius: 10px;
`
const Capa = styled.img`
width: 100px;
`
function UltimosLancamentos() {
return (
<LancamentosContainer>
<Titulo>Últimos Lançamentos</Titulo>
<Filmes>
{lancamentos.map(filme => (
<FilmeCard>
<Capa src={filme.src} alt={filme.nome} />
<p>{filme.nome}</p>
</FilmeCard>
))}
</Filmes>
</LancamentosContainer>
)
}
export default UltimosLancamentos