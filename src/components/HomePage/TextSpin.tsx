import Image from "next/image";

const TextSpin = () => {
  return (
    <div className="relative flex justify-center items-center bg-cat bg-cover bg-no-repeat bg-center group">
      <Image
        src="/images/TextCircle.png"
        alt=""
        width={550}
        height={550}
        className="animate-spin-slow relative"
      />
    </div>
  );
};

export default TextSpin;
