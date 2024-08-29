function Card({ title, description }) {
  return (
    <div className="min-w-[266px] md:min-w-20 cursor-pointer bg-gray-100 rounded shadow hover:bg-gray-200 transition duration-200 w-1/3">
      <h3 className="px-6 py-4 pb-0 text-xl font-semibold mb-2">{title}</h3>
      <hr />
      <p className="px-6 py-4 pt-0">{description}</p>
    </div>
  );
}

export default Card;
