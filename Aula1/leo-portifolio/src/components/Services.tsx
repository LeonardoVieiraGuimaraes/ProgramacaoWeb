import {
  HiCommandLine,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description: "Desenvolvimento de Sistemas e analise de dados com Python.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Mobile",
      description:
        "Desenvolvimento de aplicativos Android com React Native, Kivy e Kodular.",
      icon: <HiDevicePhoneMobile className="h-12 w-12" />,
    },
    {
      title: "Professor",
      description:
        "Professor das diversas áread da Matemática e Tecnologia da Informação.",
      icon: <HiOutlineAcademicCap className="h-12 w-12" />,
    },
  ];

  return (
    <section className="container mx-auto pt-12 my-12 max-w-6xl" id="services">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
        <p className=" text-lg text-gray-700">
          Posso atender uma gama completa de serviços, do front-end ao back-end
          com banco de dados, sistemas e professor.
        </p>
      </div>

      <div className="px-2 grid grid-cols-2 mt-10 gap-4 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
