import React from 'react';
import Image from 'next/image';

export default function Header(): React.JSX.Element {
  return (
      <header
          className="
          w-full
          flex
          items-center
          justify-center
          border-2
          border-solid
          rounded-full
          p-2
          m-2
          top-0
          sticky
          header
          ">
        <Image src="/images/logo.svg" alt="Logo" width={50} height={50}/>
        <h1 className=" ml-2 text-5xl text-purple-400 font-bold">Luiz Silva</h1>
      </header>
  );
}
