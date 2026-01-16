import { housesData } from "../data/housesData";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {housesData.map((house) => (
        <div key={house.id} className="border rounded-xl p-4">
          <img
            src={house.image}
            alt={house.name}
            className="h-48 w-full object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-3">{house.name}</h2>
          <p className="text-gray-600">{house.address}</p>
          <p className="mt-2">
            {house.beds} Beds • {house.baths} Baths • {house.areaSqft} sqft
          </p>
          <p className="text-lg font-bold mt-1">{house.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
