function Logo({ className = "" }) {
  return (
    <div className={`relative w-fit p-2 bg-white rounded-xl mr-2 ${className}`}>
      <div className="border-r-4 relative border-t-4 border-gray-700 w-5 aspect-square">
        <div className="border-4 border-gray-700 w-4 aspect-square rounded-full absolute top-0 right-0 m-[1px]"></div>
      </div>
    </div>
  );
}

export default Logo;
