import GioiThieu from "./_components/gioithieu";
import BoiCanh from "./_components/boicanh";
import ThachThuc from "./_components/thachthuc";
import GiaiPhap from "./_components/giaiphap";
import Footer from './_components/footer';

export default function Home() {
  return (
    <main>
      <GioiThieu />
      <BoiCanh />
      <ThachThuc />
      <GiaiPhap />
      <Footer />
    </main>
  );
}
