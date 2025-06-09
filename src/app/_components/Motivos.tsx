import Image from "next/image";

export default function Motivos() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-amber-500 dark:bg-neutral-800 py-12 px-4 md:px-8">
      <div className="w-[80%] max-w-screen-xl mt-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-amber-400 mb-8 text-center">
          Por que escolher a NordDTF?
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          {[
            { icon: "shield-tick.svg", text: "Material Resistente" },
            { icon: "truck-fast.svg", text: "Entrega Rápida" },
            { icon: "smileys.svg", text: "Atendimento Personalizado" },
            { icon: "bag-happy.svg", text: "Melhor Preço da região" },
            { icon: "calendar-tick.svg", text: "Alta Durabilidade" },
            { icon: "color-swatch.svg", text: "Fidelidade de Cores" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-around bg-white dark:bg-neutral-900 rounded-2xl shadow-md mx-auto w-full max-w-[180px] h-32 p-3"
            >
              <div className="relative w-10 h-10 mb-2">
                <Image
                  src={`/${item.icon}`}
                  alt={item.text}
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-center text-black dark:text-neutral-200 font-bold text-lg">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
