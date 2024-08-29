import { FaArrowRight } from "react-icons/fa6"; 
import Card from "./Card";
import React, { useState, useEffect } from "react";

function MainSection() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/cards");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setFilteredData(result);
    } catch (e) {
      setError("Failed to fetch data. Please try again later.");
      console.error("Fetch error:", e);
    } finally {
      setLoading(false);
    }
  };

  const inputHandler = (e) => {
    const userInput = e.target.value.toLowerCase();
    setFilteredData(
      data.filter((value) => value.title.toLowerCase().includes(userInput))
    );
  };

  if (loading) {
    return <div className="text-center text-2xl py-[35vh]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-2xl  py-[35vh] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-[75vh]">
      <section className="bg-[#dadbf0] text-center py-16">
        <h2 className="text-4xl mb-5">How can we help?</h2>
        <div className="relative min-w-[266px] w-1/2 mx-auto border border-gray-500">
          <input
            type="text"
            className="w-full py-3 px-4 rounded shadow focus:outline-none"
            placeholder="Search"
            onInput={inputHandler}
          />
          <button
            className="absolute right-0 top-0 bottom-0 bg-white py-3 px-4 rounded-r"
            aria-label="Search"
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
      <section className="flex gap-10 flex-wrap justify-center px-5 lg:px-40 py-10">
        {filteredData.length > 0 ? (
          filteredData.map((card, index) => <Card key={index} {...card} />)
        ) : (
          <h1 className="text-xl text-gray-700">
            Found Nothing! Search other query
          </h1>
        )}
      </section>
    </main>
  );
}

export default MainSection;
