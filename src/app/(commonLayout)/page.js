import Banner from "@/components/modules/Home/Banner";
import ReaderStories from "@/components/modules/Home/ReaderStories";
import ReadyToStart from "@/components/modules/Home/ReadyToStart";
import SimpleProcess from "@/components/modules/Home/SimpleProcess";
import Stats from "@/components/modules/Home/Stats";

export default function Home() {
  return (
    <section>
      <Banner />
      <Stats />
      <SimpleProcess />
      <ReaderStories />
      <ReadyToStart />
    </section>
  );
}
