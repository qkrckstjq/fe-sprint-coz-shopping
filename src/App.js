import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import { Bookmark } from "./pages/Bookmark";
import { Main } from "./pages/Main";
import { Productlist } from "./pages/Productlist";
import { useEffect,useState} from "react";
import axios from "axios";
import { ModalComponent } from "./components/ModalComponents";
import { ToastComponent } from "./components/ToastUi";

function App() {
  const [list,setList] = useState();
  const [isLoading,setLoading] = useState(true);
  const [Bookmarks,setBookmarks] = useState([])
  const [Modal,setModal] = useState({
    isOn:false,
    data:{}
  });
  

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
      {isLoading
      ?<h2>로딩중...</h2>
      :
      <Routes>
      <Route path="/" element={<Main
      list={list}
      Bookmarks={Bookmarks}
      setBookmarks={setBookmarks}
      Modal={Modal}
      setModal={setModal}
      />
      }/>

      <Route path="/products/list"
      element={<Productlist
      list={list}
      Bookmarks={Bookmarks}
      setBookmarks={setBookmarks}
      Modal={Modal}
      setModal={setModal}/>}/>

      <Route path="/bookmark"
      element={<Bookmark
      list={list}
      Bookmarks={Bookmarks}
      setBookmarks={setBookmarks}
      Modal={Modal}
      setModal={setModal}/>}/>

      </Routes>
      }
    <Header/>
    <Footer/>
    {Modal.isOn
    ?<ModalComponent
    data={Modal.data}
    Modal={Modal}
    setModal={setModal}
    Bookmarks={Bookmarks}
    setBookmarks={setBookmarks}
    />
    :undefined}
    <ToastComponent
    />
    </>
  );
}

export default App;
