import Image from 'next/image';
import React from 'react'
type CategoryItemProps = {
    image: string;
    name: string;
}

const CategoryItem = ({image, name} : CategoryItemProps) => {
  return (
    <div className="rounded-2xl bg-purple-500 flex flex-col items-center gap-2 p-4 cursor-pointer">
      <Image src={image} width={80} height={80} alt={name} />
      <div>
        <p className='text-white'>{name}</p>
      </div>
    </div>
  );
}

export default CategoryItem