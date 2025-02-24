import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2";

export default function Skills() {
  const educations = [
    {
      name: "Mestre me Modelagem Computacional e Sistemas | UNIMONTES",
    },
    {
      name: "Graduação Bacharelado em Ciência da Computação | FACIT",
    },
    {
      name: "Especialização em Matemática | Finon",
    },
    {
      name: "Especialização em Matemática e Estatística | UFLA",
    },
    {
      name: "Graduação Licenciatura em Matemática | UNIMONTES",
    },
  ];

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "images/skills//html.svg",
      level: 95,
    },
    {
      name: "JavaScript",
      icon: "images/skills/javascript.svg",
      level: 85,
    },
    {
      name: "React.js",
      icon: "images/skills/react.svg",
      level: 70,
    },
    {
      name: "Node.js",
      icon: "images/skills/nodejs.svg",
      level: 65,
    },
    {
      name: "Django",
      icon: "images/skills/django.svg",
      level: 80,
    },
    {
      name: "Python",
      icon: "images/skills/python.svg",
      level: 80,
    },
    {
      name: "Docker",
      icon: "images/skills/docker.svg",
      level: 50,
    },
    {
      name: "Nginx",
      icon: "images/skills/nginx.svg",
      level: 50,
    },
    {
      name: "Java",
      icon: "images/skills/java.svg",
      level: 50,
    },
    {
      name: "PHP",
      icon: "images/skills/php.svg",
      level: 40,
    },
    {
      name: "Vue.js",
      icon: "images/skills/vue.svg",
      level: 20,
    },
    {
      name: "Angular.js",
      icon: "images/skills/angular.svg",
      level: 20,
    },
    {
      name: "typescript.js",
      icon: "images/skills/typescript.svg",
      level: 40,
    },
  ];

  return (
    <section className="bg-gray-300" id="skills">
      <div className="container mx-auto max-w-6xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-40 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Professor TI e Matemática | Front-end e Back-end Developer
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
          <HiAcademicCap className="h-8 w-8 text-blue-600" />
          Educação
        </h3>
        {/* <div className="flex flex-col gap-8 md:flex-row"> */}
        <div className="grid grid-cols-1 gap-2 font-semibold md:grid-cols-2">
          {educations.map((education, index) => (
            <div
              key={`education-${index}`}
              className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
            >
              {education.name}
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-4 mt-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
            <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
            Skills
          </h3>

          <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-4">
            {skills
              .sort((a, b) => b.level - a.level)
              .map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-headlin text-gray-900">{skill.name}</h4>
                    <div className="h-2.5 w-full rounded-full bg-white">
                      <div
                        className={`h-2.5 rounded-full bg-blue-600`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
