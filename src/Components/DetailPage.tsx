import FAQ from "./FAQ";
import HeadingOfTopic from "./HeadingOfTopic";

export default function DetailPage() {
  return (
    <>
      <HeadingOfTopic
        topicName="Frontend Developer"
        topicDescription="Step by step guide to becoming a modern frontend developer in 2024"
      />
      <FAQ />
    </>
  );
}
