import { differenceInYears } from "date-fns";

export default function About() {
  const birthDate = new Date(1984, 10 - 1, 2); // Substitua pela sua data de nascimento (ano, mês - 1, dia)
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <section className="container mx-auto my-4  p-5" id="about">
      {/* <a
          href="https://www.instagram.com/seu_usuario_do_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:underline ml-4"
          title="Meu Instagram"
        >
          <FaInstagram size={24} />
        </a> */}

      <div className="relative mx-auto mt-20 max-w-6xl">
        <div className=" w-full rounded-lg bg-blue-100 p-4 ps-16  md:ps-44 md:pr-12">
          <div className=" p-4 text-center">
            <h2 className=" z-50 mb-2 font-bold text-blue-900">
              <span className="mr-2 font-headline text-3xl">Sobre</span>
              <span className="font-handwriting text-4xl">Mim</span>
            </h2>
            <p className=" text-justify text-lg text-gray-700">
              Tenho {age} anos de idade, possuo uma vasta gama de projetos no
              meu repositório no{" "}
              <a
                href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-800 hover:underline"
              >
                GitHub
              </a>
              , conto com uma sólida formação acadêmica e ampla experiência.
              Mestre em Modelagem Computacional e Sistemas pela UNIMONTES, minha
              expertise também abrange especialização em Matemática e
              Estatística. Graduei-me em Engenharia de Computação e Matemática,
              desempenhando o papel de Professor de Ensino Superior, lecionando
              disciplinas como Matemática Financeira, Probabilidade, Tecnologia
              da Informação e Gestão de Finanças. Além disso, contribuo na área
              administrativa como Assistente em Gestão de Defesa Agropecuária no
              IMA, demonstrando minha versatilidade profissional. Ao longo da
              minha carreira, participei ativamente e continuo colaborando com
              instituições de renome como IFNMG, UNIASSELVI e FADENORTE,
              agregando experiência e conhecimento diversificado. Destaco meu
              compromisso com o aprendizado contínuo, evidenciado pela
              participação em cursos complementares e eventos acadêmicos. Sou um
              profissional maduro, dedicado à aplicação prática do conhecimento
              adquirido, e permaneço aberto a novos desafios e aprendizados que
              contribuam para o meu constante desenvolvimento profissional.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="font-headline font-bold uppercase text-blue-900">
              Disponível:
            </div>
            <div>
              <span className="relative flex h-4 w-4 left-3 mt-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
            </div>
          </div>
          {/* <div className=" w-full h-full rounded-lg bg-gray-50 p-4 text-center">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p className="text-center">
              <span className="mr-1">Mue nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Leonardo Vieira Guimarães
              </span>
            </p>
            <div className="mt-4 w-full text-sm">
              <div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900 mr-6">
                    Idade:
                  </div>
                  <div>{age}</div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900 mr-6">
                    Celular:
                  </div>
                  <div>
                    <a
                      href="tel:+5538999352408"
                      className="underline hover:text-blue-800"
                    >
                      +55 (38)99935-2408
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </div>
                  <div>
                    <a
                      href="mailto:leonardovieiraxy@hotmail.com"
                      className="underline hover:text-blue-800"
                    >
                      leonadovieiraxy@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </div>
                  <div>
                    <a
                      href="https://maps.app.goo.gl/J8GYMwibv7pjR8HE7"
                      className="underline hover:text-blue-800"
                    >
                      Sao Francisco - MG
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </div>
                  <div>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-profile bg-cover bg-center md:-left-1 md:-top-1 md:h-64 md:w-40"></div>
        </div>
      </div>
    </section>
  );
}
