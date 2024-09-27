import React from 'react';
import About from './components/About/index';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import Portfolio from './components/Portfolio/index';
import RecentWork from './components/RecentWork/index';

const Index: React.FC = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <RecentWork/>
      <Portfolio/>
    </>
  );
}

export default Index;
