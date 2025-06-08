import Image from "next/image";

export default function Inicio() {
  return (
    <section
      id="Inicio"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-around p-8 bg-white dark:bg-neutral-900 gap-8"
    >
      <div className="flex flex-col max-w-md text-center md:text-left">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Bem-vindo a <span className="text-primary text-4xl">NordDTF</span>
        </h1>
        <h3 className="text-black dark:text-neutral-300 text-lg">
          Da força do <span className="text-primary">Nordeste</span>, a
          impressão do seu sucesso!
        </h3>
        <p className="text-neutral-900 dark:text-neutral-400 mt-4">
          A NordDTF é uma empresa especializada em impressão DTF, oferecendo
          qualidade e agilidade para atender às suas necessidades. Com uma
          equipe dedicada e tecnologia de ponta, garantimos resultados
          excepcionais em cada projeto.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=558899866419&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group bg-primary text-white px-6 py-4 rounded-full font-bold shadow-lg transition-transform duration-300 mt-10 hover:scale-105">
            <span className="transition-opacity duration-300 group-hover:opacity-90">
              Solicite um orçamento
            </span>
          </button>
        </a>
      </div>

      {/* Imagem com responsividade real */}
      <div className="relative flex items-center justify-center w-full md:w-auto">
        <div
          className="absolute z-0 rounded-full bg-gradient-to-r from-primary-light to-primary 
          w-[80%] max-w-[300px] aspect-square md:w-[300px] md:h-[300px]"
        />
        <div className="relative z-10 w-[80%] max-w-[300px] aspect-square md:w-[300px] md:h-[300px]">
          <Image
            src="/maquinaDtf.svg"
            alt="Máquina DTF"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
