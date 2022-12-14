import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../components/about/About';
import Articles from '../../components/articles/Articles';
import CreateArticle from '../../components/createArticle/CreateArticle';
import EditArticle from '../../components/editArticle/EditArticle';
import FullArticle from '../../components/full-articall/FullArticle';
import "./index.scss";

const Main = () => {
    return (
        <div className='main container'>
            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/createarticle' element={<CreateArticle/>}/>
                <Route path='/editarticle' element={<EditArticle/>}/>
                <Route path='/fullarticle/:id' element={<FullArticle/>}/>
            </Routes>
            <Articles/>
        </div>
    );
};

export default Main;