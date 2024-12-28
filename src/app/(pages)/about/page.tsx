"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js
import { useRouter } from "next/navigation"; // Correct import for next/navigation
import { Header } from "@/components/Header";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const About = () => {
    const router = useRouter(); // Hook para navegação
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    // Função para voltar à página anterior
    const handleGoBack = () => {
        router.back();
    };

    // Função para abrir o modal
    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto md:px-8 px-4 py-8 bg-gray-50 dark:bg-gray-950 shadow-lg rounded-xl">
                {/* Botão de Voltar */}
                <button
                    onClick={handleGoBack}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mb-8 hover:bg-blue-600 transition-colors flex items-center"
                >
                    <ArrowLeftIcon className="w-5 h-5 mr-2" />
                    Voltar
                </button>

                <header className="text-center mb-12">
                    {/* Imagem com funcionalidade de modal */}
                    <Image
                        src="https://scontent.fmpm3-1.fna.fbcdn.net/v/t39.30808-6/468846039_4033283653624929_4331618050864958601_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=j9q9mAi3Qy4Q7kNvgGM5TR7&_nc_zt=23&_nc_ht=scontent.fmpm3-1.fna&_nc_gid=AkOcjaiPykgd8EXithZCODP&oh=00_AYAJHAvxs4AyLIIWX_SHHjQMnVF-FZRnOFhfbZQm1oOBkA&oe=67753672"
                        alt="Casimiro Sidny Mapanguelane Mondlane"
                        className="rounded-full mx-auto mb-4 border-4 border-gray-200 shadow-lg cursor-pointer animate-pulse "
                        width={128}
                        height={128}
                        onClick={handleImageClick}
                    />
                    <h1 className="text-4xl font-semibold">Sobre Mim</h1>
                    <p className="text-xl">Casimiro Sidny Mapanguelane Mondlane - The Coach 9</p>
                </header>

                {/* Seções de conteúdo */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold">Minha Jornada</h2>
                    <p className="text-gray-700 dark:text-gray-200 mt-4">
                        Nasci em Gaza, Moçambique, em 23 de agosto de 2000, e desde jovem, o desporto sempre foi uma parte essencial da minha
                        vida. Minha formação acadêmica inclui a conclusão do ensino médio na Escola Secundária de Manjacaze em 2018 e o curso técnico médio em Educação Física e desporto pelo Instituto IMEDE em 2021. Atualmente, faço o meu nível superior na Universidade Eduardo Mondlane UEM. Além disso, busquei aprimorar minhas habilidades com um curso de informática em 2019.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold">Carreira Profissional</h2>
                    <p className="text-gray-700 dark:text-gray-200 mt-4">
                        Atualmente, sou treinador de formação no Clube de Desportos do Costa do Sol, cargo que exerço desde 2022.
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-200">
                        <li>Jogos escolares como atleta e treinador em Manjacaze (2015-2018).</li>
                        <li>Torneios de mini-basquete Millennium Bim Maputo em 2022 e 2023.</li>
                        <li>Campeonato Nacional Juvenil Masculino em Chimoio em 2024, onde conquistamos o 3º lugar como assistente técnico.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold">Valores e Competências</h2>
                    <p className="text-gray-700 dark:text-gray-200 mt-4">
                        Minha abordagem como treinador é guiada por valores como dinamismo, criatividade, responsabilidade e trabalho em
                        equipe. Tenho facilidade em me adaptar a diferentes ambientes e estabeleço boas relações interpessoais. Domino o português de forma excelente e possuo bons conhecimentos de inglês e changana.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold">Missão</h2>
                    <p className="text-gray-700 dark:text-gray-200 mt-4">
                        Minha missão é promover o desporto como uma ferramenta de transformação pessoal e comunitária. Acredito que, além de
                        desenvolver habilidades técnicas e táticas, o basquete ensina lições valiosas de disciplina, liderança e superação.
                    </p>
                </section>

                <footer className="mt-12">
                    <h2 className="text-3xl font-semibold">Entre em Contato</h2>
                    <p className="text-gray-700 dark:text-gray-200 mt-4">
                        Estou sempre aberto a novas oportunidades de colaboração e projetos. Entre em contato comigo pelos seguintes canais:
                    </p>
                    <ul className="mt-4 text-gray-700 dark:text-gray-200">
                        <li>Telefone: +258 850757212 / +258 867469863</li>
                        <li>
                            E-mail:{" "}
                            <a href="mailto:miromondlane3@gmail.com" className="text-blue-500 hover:underline">
                                miromondlane3@gmail.com
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>

            {/* Modal para imagem ampliada */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
                    onClick={handleCloseModal}
                >
                    <div className="relative">
                        <Image
                            src="https://scontent.fmpm3-1.fna.fbcdn.net/v/t39.30808-6/468846039_4033283653624929_4331618050864958601_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=j9q9mAi3Qy4Q7kNvgGM5TR7&_nc_zt=23&_nc_ht=scontent.fmpm3-1.fna&_nc_gid=AkOcjaiPykgd8EXithZCODP&oh=00_AYAJHAvxs4AyLIIWX_SHHjQMnVF-FZRnOFhfbZQm1oOBkA&oe=67753672"
                            alt="Casimiro Sidny Mapanguelane Mondlane"
                            className="rounded-lg shadow-xl"
                            width={512}
                            height={512}
                        />
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
