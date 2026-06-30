import Banner from "@/components/modules/Home/Banner";
import FeaturedBooks from "@/components/modules/Home/FeaturedBooks";
import ReaderStories from "@/components/modules/Home/ReaderStories";
import ReadyToStart from "@/components/modules/Home/ReadyToStart";
import SimpleProcess from "@/components/modules/Home/SimpleProcess";
import Stats from "@/components/modules/Home/Stats";

export default function Home() {
  return (
    <section>
      <Banner />
      <Stats />
      <FeaturedBooks />
      <SimpleProcess />
      <ReaderStories />
      <ReadyToStart />
    </section>
  );
}
