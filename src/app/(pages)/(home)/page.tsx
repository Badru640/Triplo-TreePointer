"use client";
import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBasketballBall, FaClock, FaMapMarkerAlt } from "react-icons/fa";


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
  const containerRef = useRef<HTMLDivElement>(null);

  // Estado para armazenar a posição inicial do toque
  const [touchStart, setTouchStart] = useState(0);

  // Função para navegar para a imagem anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

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
    }, 5000); // Mudar a cada 5 segundos

    return () => clearInterval(intervalId); // Limpar intervalo quando o componente for desmontado
  }, []);

  // Função para lidar com o evento de rolagem do mouse
  const handleWheel = (e: React.WheelEvent) => {
    // Impedir o comportamento padrão da rolagem (como rolar a página)
    e.preventDefault();

    // Detectar a rotação vertical
    if (e.deltaY > 0) {
      nextImage(); // Se a rolagem for para baixo (deltaY positivo), vai para a próxima imagem
    } else {
      prevImage(); // Se a rolagem for para cima (deltaY negativo), vai para a imagem anterior
    }
  };

  // Funções para detectar swipe com o dedo
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartPosition = e.touches[0].clientX;
    setTouchStart(touchStartPosition);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchMovePosition = e.touches[0].clientX;
    const touchDiff = touchStart - touchMovePosition;

    if (touchDiff > 50) {
      nextImage(); // Swipe para a esquerda
      setTouchStart(0); // Resetar a posição do toque
    } else if (touchDiff < -50) {
      prevImage(); // Swipe para a direita
      setTouchStart(0); // Resetar a posição do toque
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(0); // Resetar a posição do toque ao finalizar
  };

  return (
    <main>
      <Header />

      {/* Slider de Imagens com Transição Suave */}
      <section className="relative py-0 px-0">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Contêiner que segura as imagens */}
          <div
            ref={containerRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Controlar a transição das imagens
            }}
            onWheel={handleWheel} // Adiciona o evento de scroll
            onTouchStart={handleTouchStart} // Detecta o início do toque
            onTouchMove={handleTouchMove} // Detecta o movimento do toque
            onTouchEnd={handleTouchEnd} // Finaliza o movimento do toque
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-screen flex-shrink-0">

                <div className="w-full h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover"
                    fill // O atributo "fill" faz com que a imagem ocupe todo o contêiner pai.
                    sizes="100vw" // Ajusta o comportamento responsivo.
                    priority={true} // Opcional: carrega a imagem com prioridade (melhor para imagens acima da dobra).
                  />
                </div>


              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de Navegação (bolinhas) */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-6 h-6 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-white'} transition-all`}
            />
          ))}
        </div>

      </section>

      {/* Seção de Introdução */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-2xl md:text-3xl animate-bounce font-bold mb-4">
          Bem-vindo ao
        </h1>
        <h1 className="text-2xl md:text-3xl animate-bounce font-bold mb-4">
          Tri-ploThreePointer
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          O Tri-plo ThreePointer é o seu portal de referência para o basquetebol moçambicano! Criado com o objetivo de promover o Desporto e destacar talentos nacionais, nosso site combina informações, rankings, serviços de treinamento e muito mais, consolidando-se como a principal plataforma de visibilidade para atletas e equipes.
        </p>
      </section>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white sm:rounded-xl shadow-xl p-6 w-full max-w-lg mx-auto mt-8 flex flex-col mb-10 items-center"
      >
        <div className="flex items-center space-x-4">
          <FaBasketballBall className="text-4xl animate-bounce" />
          <h2 className="text-2xl font-bold">Próximo Jogo</h2>
        </div>

        <p className="mt-4 text-lg flex items-center">
          <FaClock className="mr-2" /> 20:00 - 12 de Fevereiro
        </p>
        <p className="mt-2 text-lg flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Estádio Nacional do Zimpeto
        </p>

        <Link href="/jogos">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-blue-600 hover:bg-gray-200 transition-all duration-300 px-6 py-3 text-lg font-semibold rounded-full shadow-lg"
          >
            Ver Jogos Anteriores
          </motion.button>
        </Link>
      </motion.div>

      {/* Card clicável */}
      <Link href="/about">
        <div className="cursor-pointer  flex flex-col items-center bg-gray-50 dark:bg-gray-950 shadow-lg rounded-xl py-6 px-6 hover:shadow-lg mb-4 sm:mb-0 transition-shadow">
          <Image
            src="https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-6/468846039_4033283653624929_4331618050864958601_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=5YXx_x5Ft6YQ7kNvgH9vtwK&_nc_oc=AdgHV0b4RzfckcMtuPm4sYpqmthRVvERxRVmR-dc50003fOff5vHnItuBNErgHVd9WLzDlwmjTpOEVVu_M0sxuTw&_nc_zt=23&_nc_ht=scontent.fdel27-1.fna&_nc_gid=AvjNXoOFUP3zDt0YUFDnwvx&oh=00_AYBSSCFyFyE7-MkZnGZypDsSDpqQrwt5v4L5X852rmblBQ&oe=67B16AF2"
            alt="Casimiro Sidny Mapanguelane Mondlane"
            className="rounded-full mx-auto mb-4 border-4 border-gray-200 shadow-lg cursor-pointer"
            width={128}
            height={128}
          />
          <h2 className="text-2xl font-semibold text-center">Sobre Mim</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
            Clique e Saiba mais sobre - The Coach 9.
          </p>
        </div>
      </Link>

    </main>
  );
};

export default Home;
