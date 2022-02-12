import SearchBar from './components/SearchBar';
import BookData from './data.json';
import styled from 'styled-components';

const Root = styled.div`
background-color: rgb(239, 241, 245);
min-height:100vh;
display: flex;
flex-direction: column;
`;
function App() {
  return (
    <Root>
        <SearchBar data={BookData}/>
    </Root> 
  );
}

export default App;
