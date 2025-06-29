import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Pill from "@/components/Pill";
import { useState } from "react";

// Dummy sample properties - replace with real data or import
const PROPERTYLISTINGSAMPLE = [
  {
    name: "Seaside Villa",
    address: { city: "Malibu", state: "CA", country: "USA" },
    price: 350,
    rating: 4.8,
    category: ["Top Villa", "Pool", "Pet Friendly"],
    image: "/assets/images/property1.jpg",
  },
  {
    name: "Downtown Apartment",
    address: { city: "New York", state: "NY", country: "USA" },
    price: 150,
    rating: 4.3,
    category: ["Self Checkin", "Free Parking"],
    image: "/assets/images/property2.jpg",
  },
  // add more properties as needed
];

const FILTER_LABELS = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Pet Friendly",
  "Pool",
];


const HERO_BG_IMAGE = "/assets/images/hero-bg.jpg";

export default function Home() {
  // State to track active filter
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleBookingClick = () => {
    alert("Booking...");
  };

  // Filter properties based on activeFilter
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some((cat) =>
          cat.toLowerCase().includes(activeFilter.toLowerCase())
        )
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <Head>
        <title>ALX Listing App</title>
        <meta
          name="description"
          content="Find the best properties worldwide with ALX Listing App."
        />
      </Head>

      <main className="max-w-6xl mx-auto">
        <header>
          <h1 className="text-3xl font-bold mb-6">
            Welcome to ALX Listing App
          </h1>
        </header>

        <section aria-label="Property Listing" className="mb-6">
          <article>
            <Card
              title="Sample Property"
              description="A beautiful house for rent."
            />
            <div className="mt-4">
              <Button
                label="Book Now"
                onClick={handleBookingClick}
                aria-label="Book the sample property now"
              />
            </div>
          </article>
        </section>

        <section
          aria-label="Hero Banner"
          className="relative bg-cover bg-center h-96 flex items-center justify-center text-white rounded-md shadow-lg mb-8"
          style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
        >
          <div className="bg-black bg-opacity-60 p-6 rounded-md text-center max-w-xl mx-4">
            <h2 className="text-4xl font-bold mb-2">
              Find your favorite place here!
            </h2>
            <p className="text-lg">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="my-6 px-4 flex flex-wrap gap-3 justify-center">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              active={activeFilter === label}
              onClick={() =>
                setActiveFilter(activeFilter === label ? null : label)
              }
            />
          ))}
        </section>

        {/* Property Listings */}
        <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {filteredProperties.map((property) => (
            <div
              key={property.name}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={property.image}
                alt={property.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{property.name}</h2>
                <p className="text-gray-600 mb-2">
                  {property.address.city}, {property.address.state},{" "}
                  {property.address.country}
                </p>
                <p className="font-bold mb-1">${property.price} / night</p>
                <p className="text-yellow-500 mb-2">⭐ {property.rating}</p>
                <div className="flex flex-wrap gap-2">
                  {property.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
