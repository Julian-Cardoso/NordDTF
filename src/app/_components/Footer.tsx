import Image from "next/image";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-around p-8 bg-neutral-900 text-white gap-10">
        <Image src="/Logo-Branca.png" alt="Logo" width={200} height={200} />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 mb-2 text-white">
            <a
              href="https://api.whatsapp.com/send/?phone=558899866419&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <g transform="scale(8,8)">
                  <path
                    d="M24.50391,7.50391c-2.25781,-2.25781 -5.25781,-3.50391 -8.45312,-3.50391c-6.58594,0 -11.94922,5.35938 -11.94922,11.94531c-0.00391,2.10547 0.54688,4.16016 1.59375,5.97266l-1.69531,6.19141l6.33594,-1.66406c1.74219,0.95313 3.71094,1.45313 5.71094,1.45703h0.00391c6.58594,0 11.94531,-5.35937 11.94922,-11.94922c0,-3.19141 -1.24219,-6.19141 -3.49609,-8.44922zM16.05078,25.88281h-0.00391c-1.78125,0 -3.53125,-0.48047 -5.05469,-1.38281l-0.36328,-0.21484l-3.76172,0.98438l1.00391,-3.66406l-0.23437,-0.375c-0.99609,-1.58203 -1.51953,-3.41016 -1.51953,-5.28516c0,-5.47266 4.45703,-9.92578 9.9375,-9.92578c2.65234,0 5.14453,1.03516 7.01953,2.91016c1.875,1.87891 2.90625,4.37109 2.90625,7.02344c0,5.47656 -4.45703,9.92969 -9.92969,9.92969zM21.49609,18.44531c-0.29687,-0.14844 -1.76562,-0.87109 -2.03906,-0.96875c-0.27344,-0.10156 -0.47266,-0.14844 -0.67187,0.14844c-0.19922,0.30078 -0.76953,0.97266 -0.94531,1.17188c-0.17187,0.19531 -0.34766,0.22266 -0.64453,0.07422c-0.30078,-0.14844 -1.26172,-0.46484 -2.40234,-1.48437c-0.88672,-0.78906 -1.48828,-1.76953 -1.66016,-2.06641c-0.17578,-0.30078 -0.01953,-0.46094 0.12891,-0.60937c0.13672,-0.13281 0.30078,-0.34766 0.44922,-0.52344c0.14844,-0.17187 0.19922,-0.29687 0.30078,-0.49609c0.09766,-0.19922 0.04688,-0.375 -0.02734,-0.52344c-0.07422,-0.14844 -0.67187,-1.62109 -0.92187,-2.21875c-0.24219,-0.58203 -0.48828,-0.5 -0.67187,-0.51172c-0.17187,-0.00781 -0.37109,-0.00781 -0.57031,-0.00781c-0.19922,0 -0.52344,0.07422 -0.79687,0.375c-0.27344,0.29688 -1.04297,1.01953 -1.04297,2.48828c0,1.46875 1.07031,2.89063 1.21875,3.08984c0.14844,0.19531 2.10547,3.21094 5.10156,4.50391c0.71094,0.30859 1.26563,0.49219 1.69922,0.62891c0.71484,0.22656 1.36719,0.19531 1.88281,0.12109c0.57422,-0.08594 1.76563,-0.72266 2.01563,-1.42187c0.24609,-0.69531 0.24609,-1.29297 0.17188,-1.41797c-0.07422,-0.125 -0.27344,-0.19922 -0.57422,-0.35156z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <span>(88)9 9986-6419</span>
            </a>
          </div>
          <div className="flex flex-row gap-2 mb-2 text-white">
            <a
              href="mailto:nordtfpersonalizacao@gmail.com"
              className="flex items-center gap-2 hover:text-amber-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span>nordtfpersonalizacao@gmail.com</span>
            </a>
          </div>
          <div className="flex flex-row gap-2 mb-2 text-white">
            <a
              href="https://www.instagram.com/nordtf_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <g transform="scale(8,8)">
                  <path
                    d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <span>nordtf_</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="https://maps.app.goo.gl/wcP4faRahpjcqFnD6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 mb-2 text-white hover:text-amber-500 transition-colors items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>

            <div>
              <p>Endereço: Rua Mayla Siebra Cavalcante, 313</p>
              <p>Bairro: Cruiri</p>
              <p>Iguatu - CE</p>
              <p>CEP: 59900-000</p>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-neutral-900 text-white text-center py-4 text-sm">
        © 2024 NordDTF. Todos os direitos reservados.
      </div>
    </section>
  );
}
