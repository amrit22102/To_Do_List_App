import React from 'react'
import { useState } from 'react';

const Content = () => {
    let [Projects, setProject] = useState('DSA');
    const [Count, setCount] = useState(30);

    const handlenames = () => {
        let names=['DSA', 'MERN Stack', '2-3 Projects', 'Striver Sheet', 'Resume', 'ML/AI'];
        let num = Math.ceil(Math.random()*5);
        setProject(names[num]);
    };

    const handlecount = () => {
        setCount(Count+5);
        console.log(Count);
    }

    const handleclick = () =>{
        console.log('You clicked it');
    }
    const handleclick2 = (name) =>{
        console.log(`${name} was clicked`);
    }
    const handleclick3 = (e) =>{
        console.log(e.target.innerText);
    }
  return (
    <main>
    <h5 onClick={handleclick}>Do it consistently {Projects}</h5>
    <button onClick={handlenames}>Change Project</button>
    <button onClick={() => handleclick2('Amrit')}>Click Here</button>
    <button onClick={handlecount}>Click Here</button>
    </main>
  )
}

export default Content