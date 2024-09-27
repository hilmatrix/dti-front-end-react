import React from 'react';
import About from './components/About/index';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import Portfolio from './components/Portfolio/index';
import RecentWork from './components/RecentWork/index';
import Testimonials from './components/Testimonials/index';
import WorkStrip from './components/WorkStrip/index';

import Work1 from "./assets/work-1.png";
import Work2 from "./assets/work-2.png";
import Work3 from "./assets/work-3.png";
import Work4 from "./assets/work-4.png";
import Work5 from "./assets/work-5.png";
import Work6 from "./assets/work-6.png";
import Work7 from "./assets/work-7.png";
import Work8 from "./assets/work-8.png";

const Index: React.FC = () => {
  const arrayOfImages1 : string[] = [];
  arrayOfImages1.push(Work1);
  arrayOfImages1.push(Work2);
  arrayOfImages1.push(Work3);
  arrayOfImages1.push(Work4);

  const arrayOfImages2 : string[] = [];
  arrayOfImages2.push(Work5);
  arrayOfImages2.push(Work6);
  arrayOfImages2.push(Work7);
  arrayOfImages2.push(Work8);

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <RecentWork/>
      <WorkStrip images={arrayOfImages1}/>
      <WorkStrip images={arrayOfImages2}/>
      <Testimonials/>
      <Portfolio/>
    </>
  );
}

export default Index;
