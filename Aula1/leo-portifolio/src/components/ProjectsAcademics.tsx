import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectsAcademics() {
  const projects = [
    {
      title: "Dissertaçao Graduação Engenharia da Computação",
      description: "Sistema de Identificação de Bovinos Usando RFID",
      image: "/images/projects/academics/dissertacaoEngenhariaComputacao.png",
      link: "https://drive.google.com/file/d/1jj_w4hFihZVSzSOlFSGCwHkuno2t5WGT/view?usp=sharing",
      colSpan: "col-span-1",
    },
    {
      title: "Dissertação Mestrado",
      description:
        "Monitoramento no processo de desidratação de unvas basedo em imagens",
      image: "/images/projects/academics/dissetacaoMestrado.png",
      link: "https://drive.google.com/file/d/1-l2qG_lpE9hZyoBhIYU7o79xSEl6815P/view",
      colSpan: "col-span-1",
    },
    {
      title: "Analise das notas do Enade e Enem",
      description:
        "Mineração de dados analisando a Influência das notas obtidas pelos anunos do Enem e Enade",
      image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
      link: "https://drive.google.com/file/d/1MdopkYDRjYKNr92dlhYR50HfK0z3nIFI/view?usp=drive_link",
      colSpan: "col-span-1",
    },
    {
      title: "Ocorrências de Acidentes no Trânsito Brasileiro",
      description:
        "Mineração de ados analisando as ocorrências de acidentes no trânsito brasileiro",
      image:
        "/images/projects/academics/doutoradoMineracaoDadosTrabalhoIII.png",
      link: "https://drive.google.com/file/d/1OXEAMs3jHTyWvv7OtsPg8gESEDdbbtxO/view?usp=drive_link",
      colSpan: "col-span-1",
    },
    {
      title:
        "Improving CNN Based Feature Point Detection Through Matching Information",
      description:
        "Melhorando a detecção de pontos de recursos baseados em CNN por meio de informações correspondentes",
      image: "/images/projects/academics/DoutaradoVisaoComputacional.png",
      link: "https://drive.google.com/file/d/1EAIF3-2NhG-A2O-y7W1S8Q1ASOn2Krfi/view?usp=sharing",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Sistema de Identificação de Bovinos Usando RFID",
      description: "Artigo publicado ISSN 22367160",
      image: "/images/projects/academics/artigoRFIDEngenhariaComputacao.png",
      link: "https://drive.google.com/file/d/1WDsuPN1N3Tw-WZdfPAbRMYgtCF8KncLu/view?usp=sharing",
      colSpan: "col-span-1/2",
    },

    {
      title:
        "A Matemática Financeira Aplicada em Empréstimos e Financiamentos Bancários",
      description: "Artigo publicado ISSN 22367160",
      image:
        "/images/projects/academics/especializacaoMatematicaFinanceira.png",
      link: "https://drive.google.com/file/d/1owo7hjjOpRAFNyyYyA6zktvlsPK-P3Eu/view?usp=sharing",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto Visão Computacional",
      description: "Projetos Doutrado de Ciência da Computação UFMG",
      image:
        "/images/projects/academics/doutoradoProjetoVisaoComputacional.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYWV50N_Y2OzrlRRZy0bjGRY",
      colSpan: "col-span-1",
    },
  ];

  return (
    <section
      className="bg-gradient-to-tr to-blue-600 from-gray-900 text-white"
      id="projectsAcademics"
    >
      <div className="container mx-auto max-w-6xl p-4 py-8">
        <div className="relative p-6 text-center">
          <h2 className="relative z-40 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold z-40">
              Projetos
            </span>
            <span className="font-handwriting text-4xl">Academicos</span>
          </h2>
          <p className="relative text-lg text-white">
            Durante minha jornada acadêmica e carreira profissional, tive a
            oportunidade de desenvolver várias dissertações, artigos e projetos
            importantes. A seguir, apresento alguns desses trabalhos:
          </p>
          {/* <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" /> */}
        </div>

        <div className="grid grid-cols-2 mt-10 gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              className={`group relative cursor-default rounded-lg ${project.colSpan}`}
              key={index}
            >
              <img
                className={`h-52 cursor-default rounded-lg bg-cover bg-center w-full`}
                src={`${project.image}`}
                alt=""
              />

              <span className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-70"></span>
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h4 className="font-headline text-lg text-center font-semibold ">
                  {project.title}
                </h4>
                <p className="p-4 text-center">{project.description}</p>

                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 rounded shadow hover:bg-gray-200"
                >
                  <HiArrowTopRightOnSquare className="h-6 w-6" />
                  {} Ver projeto
                </button>
              </div>
              {/* <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                    Ver projeto
                  </a> */}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </section>
  );
}
