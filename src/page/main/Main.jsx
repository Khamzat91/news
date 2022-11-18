import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../components/about/About';
import Article from '../../components/article/Article';
import FullArticle from '../../components/full-articall/FullArticle';

const Main = () => {
    return (
        <div className='main container'>
            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/fullarticle' element={<FullArticle/>}/>
            </Routes>
        </div>
    );
};

export default Main;