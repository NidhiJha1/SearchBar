import React, { useState } from 'react';
import styled from 'styled-components';
import CrossIcon from '../Images/crossIcon.svg';
import SearchIcon from '../Images/SearchIcon.svg';

const Root = styled.div`
width:100%;
display:flex;
margin-top:100px;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const InputWrapper = styled.div`
position:relative;
`;
const Input = styled.input`
width:500px;;
background-color:#fff;
outline:none;
padding:15px;
border:1px solid #d8d8d8;
border-radius:8px;
`;

const DataResultWrapper = styled.div`
width:530px;
max-height:400px;
overflow-y:scroll;
background-color:#fff;
border-radius:8px;

::-webkit-scrollbar {
    width: 0;
    scroll-snap-align: end;
  }

`;
const IconWrapper = styled.div`
 position:absolute;
 top:13px;
 right:10px;
`;

const Icon = styled.img`
:hover{
    cursor:pointer;
}
`;
const DataResultCard = styled.div`
padding:10px;
:hover{
    background-color:#ebf0f8;
    cursor:pointer;
}
`;
const Link = styled.a`
text-decoration:none;
color:#000;
`;
const SearchBar = ({data}) =>{
    const [filteredData,setFilteredData] = useState([]);
    const [serchText,setSearchText]= useState("");

    const handleFilter = (event) =>{
        const searchData = event.target.value;
        setSearchText(searchData);
        const newFilteredList = data.filter((value) =>{
            return value.title.toLowerCase().includes(searchData);
        });
         if(searchData === ''){
            setFilteredData([]);
         }else{
            setFilteredData(newFilteredList);
         }
    }

    const cancelSearch = () =>{
        setSearchText('');
        setFilteredData([]);
    }
   return(
       <Root>
           <InputWrapper>
              <Input type="text" placeholder="Search" value={serchText} onChange={handleFilter}/>
              <IconWrapper>
                  <Icon src={serchText.trim() === '' ?SearchIcon : CrossIcon} width="14px" onClick={cancelSearch}/>
              </IconWrapper>
           </InputWrapper>
          { filteredData.length !== 0 && <DataResultWrapper>
             {
                 filteredData.slice(0,15).map((value,index) =>{
                     return(
                        <DataResultCard key={index}> <Link href={value.link}>
                             {value.title}
                          </Link>
                         </DataResultCard> 
                     )
                 })
             }
           </DataResultWrapper>}
       </Root>
   )
};

export default SearchBar;