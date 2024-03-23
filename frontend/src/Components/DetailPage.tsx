import CommunitySec from "./CommunitySec";
import FAQ from "./FAQ";
import Header from "./Header";
import Footer from "./Footer";
import HeadingOfTopic from "./HeadingOfTopic";
import Timeline from "./timeline";


export default function DetailPage() {

  
  return (
    <>
      <Header />
      <div className={`"w-[100vw] items-center justify-center"`}>
        <HeadingOfTopic
          topicName="Frontend Developer"
          topicDescription="Step by step guide to becoming a modern frontend developer in 2024"
        />
        <Timeline />
        <FAQ />
      </div>
      <CommunitySec />
      <Footer />
    </>
  );
}
