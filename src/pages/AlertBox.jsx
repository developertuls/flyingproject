
export const AlertBox = ({ message, onClose }) => {
  return (
    <div className="animate-bounce fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 font-bold">X</button>
    </div>
  );
};
