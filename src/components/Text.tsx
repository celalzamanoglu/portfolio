import Image from "next/image";

export default function Text() {
  return (
    <>
      <div className="absolute flex flex-col text-[5.5vw] uppercase w-[80vw] items-start leading-tight">
        <p>Aşkım</p>
        <p className="self-end">Benimle</p>
        <p>Evlenir</p>
      </div>

      {/* Love text in bottom left */}
      <div className="absolute bottom-4 left-4 text-sm text-black">
        seni seviyorum aşkım hayatım her şeyim güzelliğim
      </div>

      {/* Image in bottom right */}
      <div className="absolute bottom-20 right-80">
        <Image src="/recep-nah.jpg" alt="Recep Nah" width={150} height={150} />
      </div>
    </>
  );
}
