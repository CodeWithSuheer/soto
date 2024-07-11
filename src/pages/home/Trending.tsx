const data = [
  {
    id: 1,
    img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_01_a07_119852_21352_on_a.jpg?v=1720561623",
    img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Babaton",
    desc: "lip Linen Maxi Skirt",
    price: 108,
  },
  {
    id: 2,
    img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_03_a06_112419_23144_on_a.jpg?v=1720561623",
    img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Babaton",
    desc: "lip Linen Maxi Skirt",
    price: 108,
  },
  {
    id: 3,
    img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_13_a08_115074_32163_on_a.jpg?v=1720561623",
    img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Babaton",
    desc: "lip Linen Maxi Skirt",
    price: 108,
  },
  {
    id: 4,
    img1: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/s24_01_a07_119571_1274_on_a.jpg?v=1720561622",
    img2: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Babaton",
    desc: "lip Linen Maxi Skirt",
    price: 108,
  },
];

const Trending = () => {
  return (
    <>
      <div className="sm:px-10 px-4 pt-10 sm:pt-16 pb-10 w-full min-h-screen">
        <div className=" header mb-6 text-black flex justify-between items-center w-full">
          <h2 className="text-lg font-normal text-start max-w-2xl">
            Trending Now
          </h2>
        </div>

        <div className="data w-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-1">
            {data.map((data) => (
              <div
                key={data?.id}
                className="group block overflow-hidden px-0.5"
              >
                <div className="relative h-[480px] sm:h-[480px]">
                  <img
                    alt="product_image1"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    src={data?.img1}
                  />
                  <img
                    alt="product_image2"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    src={data?.img2}
                  />
                </div>
                <div className="relative bg-white pt-3 px-1.5">
                  <h3 className="text-sm text-gray-900">{data?.title}</h3>
                  <p className="text-sm text-gray-900">{data?.desc}</p>
                  <p className="mt-1.5 tracking-wide">
                    <span className="line-through text-gray-500 mr-2">
                      ${data?.price}
                    </span>
                    <span className="text-red-500">${data?.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
