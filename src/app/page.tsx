import Card from "./_components/Card";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Inicio from "./_components/Inicio";
import Motivos from "./_components/Motivos";

export default function Page() {
  return (
    <div>
      <Header />
      <Inicio />
      <Motivos />
      <Card />
      <Footer />
    </div>
  );
}
