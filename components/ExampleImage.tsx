import Image from "next/image";

interface ExampleProps {
  name: string;
}

const ExampleComponent = (props: ExampleProps) => {
  return (
    <>
      <Image
        src="/example.jpeg"
        alt="Example picture"
        width={500}
        height={500}
      />
      <span>{props.name}</span>
    </>
  );
};

export default ExampleComponent;
