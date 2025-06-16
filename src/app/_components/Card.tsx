export default function Card() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white dark:bg-neutral-900 pb-0 pt-2 px-8">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-[80%] w-[80%] bg-white dark:bg-neutral-800 rounded-t-lg overflow-hidden shadow-lg mb-4">
        {[
          {
            iconPath: (
              <>
                <path d="M18 22H4a2 2 0 0 1-2-2V6" />
                <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
                <circle cx="12" cy="8" r="2" />
                <rect width="16" height="16" x="6" y="2" rx="2" />
              </>
            ),
            title: "+300",
            desc: "São mais de 300 estampas prontas para você utilizar em suas criações.",
          },
          {
            iconPath: (
              <>
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </>
            ),
            title: "Suporte 24/7",
            desc: "Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para ajudar você.",
          },
          {
            iconPath: (
              <>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
                <rect x="6" y="14" width="12" height="8" rx="1" />
              </>
            ),
            title: "+1000",
            desc: "Já são mais de 1000 metros de estampas impressas em alta qualidade.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative flex-1 flex flex-col items-center justify-center px-4 py-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white rounded-lg m-2"
          >
            <div className="mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-black dark:text-amber-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              >
                {item.iconPath}
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-all duration-300 ease-in-out group-hover:scale-105">
              {item.title}
            </h3>
            <p className="text-sm text-center text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-all duration-300 ease-in-out group-hover:scale-105">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
