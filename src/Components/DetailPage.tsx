import CommunitySec from "./CommunitySec";
import FAQ from "./FAQ";
import Header from "./Header";
import Footer from "./Footer";
import HeadingOfTopic from "./HeadingOfTopic";

export default function DetailPage() {
  return (
    <>
      <Header/>
      <HeadingOfTopic
        topicName="Frontend Developer"
        topicDescription="Step by step guide to becoming a modern frontend developer in 2024"
      />
      <CommunitySec/>
      <Footer/>
      <FAQ />
    </>
  );
}
