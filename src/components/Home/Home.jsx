import React from 'react';
import './Home.Module.css';
import { Container, Carousel, Image } from 'react-bootstrap';
export default function Home  () {
  return (
    <div className='bodyHome'>
    <Container className='cont text-center'>
      <h3>Atendimento domiciliar na Zona Sul, Barra e Recreio. Tel./WhatsApp: 99171-7885.</h3>
    </Container>
    <div className="carousel-container">
    <div className="mt-4" >
        <Carousel>
          <Carousel.Item>
          <Image
               className="d-block w-100" 
               src="/slide-1.jpg" 
               alt="Imagem"
               style={{ opacity: 0.5 }} // Ajuste o valor entre 0 (totalmente transparente) e 1 (opaco)
               fluid 
          />
            <Carousel.Caption>
              <h3>Nosso objetivo</h3>
              <p>Levar a acupuntura bioenergética às pessoas acometidas por dores e
              desequilíbrios energéticos ou emocionais.</p>
              <p>Para essas pessoas, recomendamos que experimentem a acupuntura, técnica milenar indicada pela OMS para tratar inúmeras patologias.</p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <Image
               className="d-block w-100" 
               src="/slide-2.jpg" 
               alt="Imagem"
               style={{ opacity: 0.5 }} // Ajuste o valor entre 0 (totalmente transparente) e 1 (opaco)
               fluid 
          />
            <Carousel.Caption>
              <h3>O que é a Acupuntura?</h3>
              <p>A Acupuntura faz parte da Medicina Tradicional
                        Chinesa (MTC). Está baseada na existência da energia como fonte integradora e reguladora de toda
                        a forma físico-química. Seu principal objetivo é obter o equilíbrio energético do ser humano.</p>
              <p>A energia circula por uma série de meridianos. Os desequilíbrios
              energéticos são tratados com a inserção de agulhas no trajeto desses meridianos.</p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <Image
               className="d-block w-100" 
               src="/slide-3.jpg" 
               alt="Imagem"
               style={{ opacity: 0.5 }} // Ajuste o valor entre 0 (totalmente transparente) e 1 (opaco)
               fluid 
          />
            <Carousel.Caption>
              <h3><strong>Acupuntura Bioenergética</strong></h3>
              <p>A Acupuntura Bioenergética estabelece nexos entre a Medicina
                        Tradicional Chinesa e o modelo biomédico. Esta visão da acupuntura a torna uma disciplina
                        integrada no contexto acadêmico das Ciências Médicas. Desta forma, fornece novas possibilidades
                        de pesquisa e desenvolvimento da prática da Acupuntura e da MTC.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
    <br/>
    </div>
  )
}

