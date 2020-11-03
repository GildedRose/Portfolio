import React from 'react';
import {About} from '../src/About';
import {Resume} from '../src/Resume';
import {Contact} from '../src/Contact';
import './Home.css';
import { Portfolio } from './Portfolio';


export const Home = () => (
  <body class="text-center">
    <div class="cover  w-100% h-100 p-3 mx-auto flex-column">
      <div>
    <header role="main">
    <img 
    src={require("./assets/images/AnnePlummerCover.png")} 
    class="responsive" />
  </header>
  <main>
    <About>
    </About>
    <Portfolio>
    </Portfolio>
    <Resume>
    </Resume>
    <Contact>
    </Contact>
  </main>
        </div>
        </div>
</body>

)


 