import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Contador from './components/Contador';

function App() {
  const [contador, setContador] = useState(0);
  const hijos = [
    {
      titulo: 'Luffy',
      texto: 'Monkey D. Luffy, más conocido como Luffy «Sombrero de Paja», es el protagonista principal de la serie de manga y anime One Piece. Es el capitán y fundador de los Piratas de Sombrero de Paja así como un de los Cuatro Emperadores que gobiernan los mares del Nuevo Mundo.',
      imgSrc: 'https://www.gifcen.com/wp-content/uploads/2021/12/luffy-gif-9.gif',
    },
    {
      titulo: 'Zoro',
      texto: 'Roronoa Zoro, también conocido como "El Cazador de Piratas Roronoa Zoro", es uno de los personajes principales del manga One Piece. Fue el primer miembro en unirse a Luffy como tripulante, convirtiéndose en el combatiente​​ de la tripulación, y uno de sus dos espadachines, siendo el otro Brook.',
      imgSrc: 'https://www.icegif.com/wp-content/uploads/2022/10/icegif-949.gif',
    },
    {
      titulo: 'Nami',
      texto: 'Nami (ナミ Nami?), apodada Gata Ladrona (泥棒猫 Dorobō Neko?),[11] es una pirata y la navegante de los Piratas del Sombrero de Paja, así como una de las protagonistas principales de la serie. Es el tercer miembro de la tripulación y la segunda en unirse, haciéndolo oficialmente durante el arco de Arlong Park.',
      imgSrc: 'https://giffiles.alphacoders.com/491/49145.gif',
    },
    {
      titulo: 'Sanji',
      texto: 'Sanji (サンジ Sanji?), conocido como Pierna Negra (黒脚 Kuro Ashi?) y nacido como Vinsmoke Sanji (ヴィンスモーク・サンジ Vinsumōku Sanji?), es el cocinero de los Piratas de Sombrero de Paja. Es el quinto miembro de la tripulación, y el cuarto en unirse. Él nació en el North Blue, siendo el primer tripulante en no ser originario del East Blue.',
      imgSrc: 'https://media.tenor.com/ZBumoMgLnFIAAAAC/sanji-sanji-wano.gif',
    },
    {
      titulo: 'Chopper',
      texto: 'Tony Tony Chopper (トニートニー・チョッパー Tonī Tonī Chopā?) es el médico de los Piratas de Sombrero de Paja. Es un reno que comió la fruta Hito Hito de la isla de Drum. Él es el sexto miembro de la tripulación y el quinto en unirse a ella.',
      imgSrc: 'https://media4.giphy.com/media/fVWFWTXjmcu4oxN2U0/giphy.gif?cid=6c09b9521f18e148cc9d025626851c8699629471aa7bf194&rid=giphy.gif&ct=g',
    },
    {
      titulo: 'Nico Robin',
      texto: 'Nico Robin (ニコ・ロビン Niko Robin?), también conocida por sus epítetos: Niña Demonio (悪魔の子 Akuma no Ko?) y La Luz de la Revolución (革命の灯 Kakumei no Tomoshibi?) es la arqueóloga de los Piratas de Sombrero de Paja. Es el séptimo miembro de la tripulación y el sexto en unirse, haciéndolo al final del arco de Arabasta. Dejó temporalmente a la tripulación durante el arco de Water 7, pero se reincorporó durante el arco de Enies Lobby.',
      imgSrc: 'https://steamuserimages-a.akamaihd.net/ugc/851595033353586900/4F6F3CFA5CCA2810693CADB6EF59B43691D98951/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    }

  ];
  function aumentarContador() {
    setContador(contador + 1);
  }
  function decrementarContador() {
    setContador(contador - 1);
  }
  function resetContador() {
    setContador(0);
  }

  return (
    <div>
      <h1>
        Actividad 1 Props, Components y Hooks en REACT.
      </h1>
      <div className='conjunto-cartas'>
        {hijos.map((hijo, indice) => (
          <Card
            key={indice}
            numero={indice + 1}
            titulo={hijo.titulo}
            texto={hijo.texto}
            contador={contador}
            imgSrc={hijo.imgSrc}
          />
        ))
        }
        <Contador
          contador={contador}
          aumentarContador={aumentarContador}
          decrementarContador={decrementarContador}
          resetContador={resetContador} />
      </div>
    </div>
  );
}

export default App; 
