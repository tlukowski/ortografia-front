import Image from 'next/image';
import React from 'react'
import CategoryItem from './CategoryItem';

const categories = [
  {
    name: "Favorites",
    image: "http://scr.gl8.pl/p/2023-08-06/firefox_HyqtboDvKe.png",
  },
  {
    name: "Favorites",
    image: "http://scr.gl8.pl/p/2023-08-06/firefox_HyqtboDvKe.png",
  },
];
const CategoryList = () => {
  return (
    <>
      <h2 className="text-white font-bold text-2xl mt-4">Wybierz kategorię</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryList