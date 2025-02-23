import React from 'react';
import { Image } from 'react-bootstrap';
import "./Sobre.Module.css";

export default function Sobre() {
  return (
      <div className='bodySobre'>
        <hr></hr>
        <div className="cabeca">
            <div>
            <h2 className='text-center' >Sobre Wŭ Xíng Barra</h2>
            </div>
            <div>
              <h5 className='text-center'>Wŭ Xíng foi fundada com o intuito de oferecer tratamentos de acupuntura de qualidade, segundo os princípios da Acupuntura Bioenergética.</h5>
             </div>
             <div>
               <h5 className='text-center'>Atendemos em domicílio e em empresas. </h5>
             </div>
        </div>
         <hr></hr>
           <div className='carlos'>
               <Image
                  className="carlos2 d-block mx-auto"
                  src="/cara_carlos.jpg"
                  alt="Imagem"
                  style={{ opacity: 0.6, borderRadius: '56px' }}
                  fluid                  
               />
         <h3 align="center">Carlos Ardoy</h3>
         <h5 align='center'>Acupunturista</h5>
         </div>
         <hr></hr>
        </div>
  )

}
