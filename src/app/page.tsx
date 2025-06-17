"use client";

import Image from "next/image";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div>

      {/* hero */}
      <section className="relative w-full h-[524px]">

        <Image
          src="/background.webp"
          alt="Background Image"
          width={1440}
          height={524}
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-0 w-full h-full z-0 blur-[2px] opacity-95"
          priority
        />

        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <Image
            src="/logo_v1.png"
            alt="Logo"
            width={524}
            height={524}
            className="z-10"
            priority
          />


          <a
            href="https://wa.me/5563984100872"
            id="whatsapp-button"
            className="flex items-center gap-2 mt-6 px-4 py-2 bg-[var(--custom-green)] text-white rounded-lg text-sm font-medium shadow-md transition-transform hover:scale-105 hover:bg-[#3b7c45] z-30 relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icon/whatsapp-white.png"
              alt="WhatsApp"
              width={20}
              height={20}
            />
            Fale no WhatsApp
          </a>


        </div>
      </section>

      {/* sobre */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-center w-full min-h-[524px] px-4 py-20 gap-8 p-10">
        <div className="w-[220px] h-[280px] overflow-hidden rounded-lg shadow-lg self-start md:mt-0">
          <Image
            src="/silvano-imagem.jpeg"
            alt="Imagem de Silvano"
            width={220}
            height={280}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="max-w-xl w-full">
          <h2 className="text-[1.5rem] font-semibold text-left mb-1" id="silvano-nome">
            Silvano Almeida Nascimento
          </h2>
          <p className="text-[1.1rem] text-center md:text-left text-gray-700 mb-4">
            Advogado - OAB/TO 7.049
          </p>


          <div className="text-justify text-[0.95rem] sm:text-base leading-relaxed space-y-4 text-gray-800">
            <p>
              Silvano Almeida é advogado com mais de 10 anos de experiência nas áreas de Direito Constitucional e Direito e Processo do Trabalho. Atua com excelência na defesa de interesses constitucionais e trabalhistas, sempre em busca das melhores soluções jurídicas.
            </p>
            <p>
              Possui experiência como assistente jurídico na Minerva Foods e como assessor jurídico em Palmas/TO, o que lhe proporcionou uma visão estratégica sobre questões legais no setor público e privado. Com sólida formação e abordagem prática, oferece soluções jurídicas personalizadas, eficazes e seguras.
            </p>
            <p>
              Comprometido com a ética e a justiça, destaca-se pela capacidade de entender as necessidades dos clientes e atuar de forma estratégica para alcançar resultados positivos e sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* áreas de atuação */}
      <section className="bg-[#273453] text-white py-10 px-4 sm:px-6 md:px-20" id="areas-de-atuacao">
        <h2 className="text-xl font-semibold mb-10" id="title">Áreas de Atuação</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 px-2 sm:px-10 text-left text-[0.95rem]">
          {/* item */}
          <div>
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2"></span>
              <div>
                <h3 className="font-bold text-[1.1rem]">Direito do Trabalho</h3>
                <p className="text-[var(--custom-grey)]">Atuação em demandas trabalhistas, com foco na defesa dos direitos do trabalhador ou empregador.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2"></span>
              <div>
                <h3 className="font-bold text-[1.1rem]">Direito Cível</h3>
                <p className="text-[var(--custom-grey)]">Soluções jurídicas em questões contratuais, indenizatórias e conflitos de natureza civil.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2"></span>
              <div>
                <h3 className="font-bold text-[1.1rem]">Ações Anulatórias</h3>
                <p className="text-[var(--custom-grey)]">Anulação de atos administrativos ou judiciais ilegais por meio de ações específicas.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2"></span>
              <div>
                <h3 className="font-bold text-[1.1rem]">Consultoria Jurídica</h3>
                <p className="text-[var(--custom-grey)]">Análise e orientação técnica para decisões seguras em questões legais diversas.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2"></span>
              <div>
                <h3 className="font-bold text-[1.1rem]">Assessoria Jurídica</h3>
                <p className="text-[var(--custom-grey)]">Suporte contínuo a empresas e pessoas físicas em suas demandas jurídicas recorrentes.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2"></span>
              <div>
                <h3 className="font-bold text-[1.1rem]">Defesa Técnica</h3>
                <p className="text-[var(--custom-grey)]">Representação estratégica e comprometida em processos judiciais e administrativos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contato */}
      <section className="bg-[--background] py-6 px-4 sm:px-8 w-full mx-auto rounded-md">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Image
            src="/logo_v1-recortado.png"
            alt="Logo"
            width={240}
            height={240}
            className="object-cover"
            style={{ maxWidth: "240px", height: "auto" }}
          />

          <div className="flex flex-col gap-4 sm:gap-6">
            <ul className="space-y-4 sm:space-y-5 max-w-[800px] text-sm sm:text-base">

              {/* Telefone */}
              <li
                className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105 active:scale-105"
                onClick={() => copyToClipboard("63992537691")}
                title="Clique para copiar"
              >
                <Image src="/icon/phone-gold.png" alt="Telefone" width={20} height={20} />
                <span className={copied ? "animate-blink" : ""}>
                  63 99253-7691 | 63 98410-0872
                </span>
                {copied && <span className="text-xs text-green-600 ml-2 select-none">Copiado!</span>}
              </li>



              {/* E-mail */}
              <li className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-105">
                <Image src="/icon/email-gold.png" alt="E-mail" width={20} height={20} />
                <a
                  href="mailto:advsilvanoalmeida@gmail.com"
                >
                  advsilvanoalmeida@gmail.com
                </a>
              </li>


              {/* Endereço */}
              <li className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-105">
                <Image src="/icon/pin-gold.png" alt="Localização" width={20} height={20} />
                <a
                  href="https://www.google.com/maps?q=Rua+Guanabara,+Quadra+D,+Lote+06+-A,+Setor+Urbano,+Araguaína,+TO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-tight"
                >
                  Rua Guanabara, Quadra D, Lote 06 -A<br />
                  Setor urbano, Araguaína Tocantins
                </a>
              </li>

            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}