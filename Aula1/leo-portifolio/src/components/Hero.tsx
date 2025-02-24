import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      className="rounded-br-[60px] bg-gradient-to-tr to-blue-600 from-gray-900 text-white"
      id="hero"
    >
      <div className="container mx-auto max-w-6xl flex-col-reverse p-4 py-20 md:flex-row">
        {/* <div className="basis-1/2"> */}

        <h1 className="mb-6 text-center md:text-left">
          <span className="block font-handwriting text-3xl">Olá, me chamo</span>
          <span className="mr-2 font-headline text-5xl font-semibold">
            Leonardo
          </span>
          <span className="font-headline text-4xl font-semibold text-blue-400">
            {" "}
            Vieira Guimarães
          </span>
        </h1>

        <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
          <div className="h-1 w-12 rounded-full bg-blue-800"></div>Professor e
          Desenvolvedor Front-end e Back-end
        </h2>

        <p className="text-gray-100 my-6 text-justify">
          Desenvolvedor web apaixonado por código, graduado em Matemática e
          Engenharia da Computação, com mestrado em Modelagem Computacional.
          Compartilho meu conhecimento como professor de ensino superior,
          enquanto continuo a criar soluções inovadoras na interseção da
          matemática e da tecnologia.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-2">
          {/* <a href="#" className="underline font-bold text-white">
              Fale Comigo
            </a> */}
          {/* <span className="italic text-gray-500">ou</span> */}
          {/* <a
              href=""
              className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <HiDownload />
              Baixe meu CV
            </a> */}
          <a
            href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4869231A0&tokenCaptchar=03AFcWeA5Xz3lD3vn5HMS9GhkTKnLTFNnn8jIdHmV_gGRxrMmhMj41i_6Lu2oqfAtLP5wyFXdVZJpjXvvBdtYwHXjTs7bE8nxmxjvutCykBoUD2ABe3QL8PkNAaHKTtLibwnOmDCBThU6EIF0OCwoUk3e6_hV4UtOLpidaeAc6fBZ14zZG19qOnFiRwAKpKlyL0jk1LNgurGjYKluX58WYGzMccWrP14UUtkFZSYCZDIBW4iSf0xGtUqMQwkZc_ESopuXY1_gWxABMsK8llBEOZIvkifBmUADeP1rEEQbejucQ03IqK8ZGZfN99DsnBlHuL9GVfkhai8JypHpWhybU2GuFky2xySYJMSxkDwiepFsyOuYY07WsmkoTjvMSawClnvm06zTG6_6WgBXjejxcFD3D3Vfa-Ay7FpMvh3pMXn5k0bNz2U374mFAC7Iv4HXSjcDgNAulCcPKNOtn2P_E8qru4Ryhl1nhWmctHNrd0mMifRWb9T1DzKINX51NK7NmU6ZOFE-LO4MpwNgG6xl-ncQYWWolaYe7BTRm1rPxdHJWH_GeLHQnRFeaOLWrtvZMO6tbdUw1hmo4"
            target="_blank"
            rel="noopener"
            className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <HiDownload />
            Currículo Lattes
          </a>
        </div>
      </div>
      {/* <div className="basis-1/2"> </div>
      </div> */}
    </section>
  );
}
