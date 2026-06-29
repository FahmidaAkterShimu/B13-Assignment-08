import Banner from "@/components/modules/Home/Banner";
import ReaderStories from "@/components/modules/Home/ReaderStories";
import SimpleProcess from "@/components/modules/Home/SimpleProcess";
import Stats from "@/components/modules/Home/Stats";

export default function Home() {
  return (
    <section>
      <Banner />
      <Stats />
      <SimpleProcess />
      <ReaderStories />
    </section>
  );
}
