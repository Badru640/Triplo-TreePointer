"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import Link from "next/link";

const images = [
  {
    src: "https://mznews.co.mz/wp-content/uploads/2024/08/Mocambique-basquetebol-feminino.jpg",
    alt: "Imagem 1",
    link: "https://exemplo.com/link1"
  },
  {
    src: "https://static01.nyt.com/images/2016/01/21/sports/21THREEweb1/21THREEweb1-superJumbo.jpg",
    alt: "Imagem 2",
    link: "https://exemplo.com/link2"
  },
  {
    src: "https://media.wired.com/photos/5926f575ac01987bf01380e3/master/w_2560%2Cc_limit/TPSCurryTA-517150704.jpg",
    alt: "Imagem 3",
    link: "https://exemplo.com/link3"
  },
  // Adicione mais imagens conforme necessário
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Função para navegar para a imagem anterior
  
  // Função para navegar para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Função para navegar diretamente para uma imagem clicada nas bolinhas
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Efeito para trocar a imagem automaticamente
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage(); // Trocar para a próxima imagem
    }, 5000); // Mudar a cada 3 segundos

    return () => clearInterval(intervalId); // Limpar intervalo quando o componente for desmontado
  }, []);

  return (
    <main>
      <Header />
     

      {/* Slider de Imagens com Transição Suave */}
      <section className="relative py- px-0">
        <div className="relative w-full h-screen overflow-hidden ">
          {/* Contêiner que segura as imagens */}
          <div
            className="  flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Controlar a transição das imagens
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-screen flex-shrink-0">
                <Link href={image.link}>
                  <div className="w-full h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full h-fit  object-cover"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
         

         
        </div>

        {/* Indicadores de Navegação (bolinhas) */}
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'} transition-all`}
            />
          ))}
        </div>
      </section>
       {/* Seção de Introdução */}
       <section className="py-16 px-4 text-center ">
        <h1 className="text-3xl animate-bounce font-bold mb-4">
          Bem-vindo ao Tri-ploThreePointer
        </h1>
        <p className="text-lg  max-w-2xl mx-auto">
        O Tri-plo ThreePointer é o seu portal de referência para o basquetebol moçambicano! Criado com o objetivo de promover o Desporto e destacar talentos nacionais, nosso site combina informações, rankings, serviços de treinamento e muito mais, consolidando-se como a principal plataforma de visibilidade para atletas e equipes.
        </p>
      </section>
       <div className="h-screen">
            olaa
          </div>
    </main>
  );
};

export default Home;
