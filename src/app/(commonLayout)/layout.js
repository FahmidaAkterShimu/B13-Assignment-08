import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BooksMarquee from "@/components/shared/BooksMarquee";
import NextThemeProvider from "@/providers/NextThemeProvider";

const MainLayout = ({ children }) => {
  return (
    <>
      <NextThemeProvider>
        <Navbar />
        <BooksMarquee />
        <main className='min-h-screen'>
          {children}
        </main>
        <Footer />
      </NextThemeProvider>
    </>
  );
};

export default MainLayout;