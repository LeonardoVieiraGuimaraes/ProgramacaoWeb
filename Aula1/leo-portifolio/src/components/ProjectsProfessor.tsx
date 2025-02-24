import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectsProfessor() {
  const projects = [
    {
      title: "Estátitica e Probabilidade",
      description: "Video aulas de Estátitica e Probabilidade",
      image: "/images/projects/professor/aulaEstatisticaProbabilidade.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYUFCykmhDHcOhAIv7er7rou",
      colSpan: "col-span-1",
    },

    {
      title: "Matemática Financeira",
      description: "Video aulas de Matemática Financeira",
      image: "/images/projects/professor/aulaMatematicaFinanceira.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYXHvrPFdzPvz2StCvwDVNym",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto Integrador",
      description: "Video aulas Projeto Integrador",
      image: "/images/projects/professor/aulaProjetoIntegrador.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYVKOSuhf2p27tRaFlXAFG1T",
      colSpan: "col-span-1",
    },
  ];

  return (
    <section
      className="bg-gradient-to-tr to-blue-600 from-gray-900 text-white"
      id="projectsProfessor"
    >
      <div className="container mx-auto max-w-6xl p-4 py-8">
        <div className="relative p-6 text-center">
          <h2 className="relative z-40 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold z-40">
              Projetos e Videoaulas
            </span>
            <span className="font-handwriting text-4xl">Professor</span>
          </h2>
          <p className="relative text-lg text-white">
            A seguir, apresento algumas videoaulas e projetos que elaborei
            durante minha trajetória como professor.
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
