const products = [
  {
    id: 1,
    name: "Dr. Udin",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1380&t=st=1660021239~exp=1660021839~hmac=2f186354eda848a3ca6a20c41308697b615e08431c1bd5eb11d3e67bd256ba0e",
    imageAlt: "Dr. Udin",
    color: "Dokter Umum",
  },
  {
    id: 2,
    name: "Dr. Udin",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1380&t=st=1660021239~exp=1660021839~hmac=2f186354eda848a3ca6a20c41308697b615e08431c1bd5eb11d3e67bd256ba0e",
    imageAlt: "Dr. Udin",
    color: "Dokter Umum",
  },
  {
    id: 3,
    name: "Dr. Udin",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1380&t=st=1660021239~exp=1660021839~hmac=2f186354eda848a3ca6a20c41308697b615e08431c1bd5eb11d3e67bd256ba0e",
    imageAlt: "Dr. Udin",
    color: "Dokter Umum",
  },
  {
    id: 4,
    name: "Dr. Udin",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1380&t=st=1660021239~exp=1660021839~hmac=2f186354eda848a3ca6a20c41308697b615e08431c1bd5eb11d3e67bd256ba0e",
    imageAlt: "Dr. Udin",
    color: "Dokter Umum",
  },
];

export default function Medic() {
  return (
    <div className="bg-white">
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-gray-900">
          Daftar Tenaga Kesehatan Homecare Hari ini
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
