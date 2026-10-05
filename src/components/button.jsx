export default function Button({ label, onClick, variant = "primary" }) {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    danger: "bg-rose-600 text-white hover:bg-rose-700"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {label}
    </button>
  );
}