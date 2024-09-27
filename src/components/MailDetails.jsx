import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategory, clearSelectedCategory } from '../Stores/mealSlice';

function MailDetails() {
  const dispatch = useDispatch();
  const { categories, selectedCategory, loading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };

  const handleBackClick = () => {
    dispatch(clearSelectedCategory());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='min-h-screen'>
      {selectedCategory ? (
        <div className='p-4'>
          <button onClick={handleBackClick} className='mb-4 p-2 bg-blue-300 rounded-lg'>
            Back to Categories
          </button>
          <div className='bg-opacity-50 bg-white p-4 max-w-xl md:max-w-2xl lg:max-w-4xl rounded-lg shadow-xl drop-shadow-2xl'>
            <h1 className='text-3xl text-blue-400 text-center mb-8 font-bold'>
              {selectedCategory.strCategory}
            </h1>
            <img
              className='mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg'
              src={selectedCategory.strCategoryThumb}
              alt={selectedCategory.strCategory}
            />
           <div className='p-4 bg-gray-100 text-green-700 drop-shadow-2xl rounded-xl text-left'>
           <p className='text-lg md:text-2xl'>
              {selectedCategory.strCategoryDescription}
            </p>
           </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className='text-3xl mb-10 text-blue-400 font-bold text-center'>Meals Categories</h1>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-full bg-opacity-50 bg-slate-200'>
            {categories.map((category) => (
              <li
                className='hover:bg-gradient-to-tr from-yellow-200 to-teal-300 p-4 rounded-lg transition-transform duration-300 hover:scale-105 shadow-xl drop-shadow-2xl cursor-pointer'
                key={category.idCategory}
                onClick={() => handleCategoryClick(category)}
              >
                <h2 className='text-lg sm:text-xl text-center text-teal-700 font-bold'>
                  {category.strCategory}
                </h2>
                <img
                  className='mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg'
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MailDetails;
