import React from 'react';

const News = () => {
  const news = [
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },
    
  ];

  const anonses = [
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },
    {
      icon:"https://cy92216.tw1.ru/wp-content/uploads/2024/05/img_31893-scaled.jpg",
      title: 'Алексий Скляров принял участие в возложении цветов к Медному всаднику.',
      // description: 'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    },

  ];

  return (
    <section className="">
    <div className="container sm:grid sm:grid-cols-12">
      <div className="sm:col-span-8 px-4">
        <h3 className='w-full text-center py-5 mb-5 border-b-[2px] border-sky-800'>НОВОСТИ</h3>
        <div className='grid grid-cols-2 gap-6'>
        {news.map((feature, index) => (
            <div key={index} className="">
              <img className='object-cover h-[250px] w-full' src={feature.icon} alt="" />
              <h3 className="text-lg mt-3 font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </div>
          ))}
          </div>
      </div>
      <div className="sm:col-span-4 px-4">
        <h3 className='w-full text-center py-5 mb-5 border-b-[2px] border-sky-800'>АНОНСЫ</h3>
        {anonses.map((feature, index) => (
            <div key={index} className="pb-3">
              <img className='object-cover h-[350px] w-full' src={feature.icon} alt="" />
              <h3 className="text-lg mt-3 font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </div>
          ))}
      </div>

    </div>
  </section>
    // <section className='container grid grid-cols-12"'>
    //   <div className='col-span-9'>
    //     <h3>НОВОСТИ</h3>
    //     <div className='grid grid-cols-2'>
    //       {features.map((feature, index) => (
    //         <div key={index} className="rounded-2xl border border-gray-200 p-4">
    //           <img className='w-full' src={feature.icon} alt="" />
    //           <h3 className="text-lg mt-3 font-semibold text-gray-900">{feature.title}</h3>
    //           <p className="mt-2 text-gray-700">{feature.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //     </div>
    //   <div className='col-span-3'>
    //     <h3>АНОНСЫ</h3>
    //       {features.map((feature, index) => (
    //         <div key={index} className="rounded-2xl border border-gray-200 p-4">
    //           <img className='w-full' src={feature.icon} alt="" />
    //           <h3 className="text-lg mt-3 font-semibold text-gray-900">{feature.title}</h3>
    //           <p className="mt-2 text-gray-700">{feature.description}</p>
    //         </div>
    //       ))}
    //     </div>
    // </section>
  );
};

export default News;