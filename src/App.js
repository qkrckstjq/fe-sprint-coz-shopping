import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import { Bookmark } from "./pages/Bookmark";
import { Main } from "./pages/Main";
import { Productlist } from "./pages/Productlist";
import { useEffect,useState} from "react";
import axios from "axios";

function App() {
  const [list,setList] = useState();
  const [isLoading,setLoading] = useState(true);

  useEffect(()=>{
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
    .then((res)=>{
      setList(res.data);
      setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <Header>

    </Header>
      {isLoading
      ?<h2>로딩중...</h2>
      :
      <Routes>
      <Route path="/" element={<Main list={list}/>}/>
      <Route path="/products/list" element={<Productlist/>}/>
      <Route path="/bookmark" element={<Bookmark/>}/>
      </Routes>
      }
      

    

    <Footer>

    </Footer>
    </>
  );
}

export default App;
