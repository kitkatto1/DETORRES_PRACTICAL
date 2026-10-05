export default function ErrorMessage({ message }) {
  return (
    <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-lg text-center my-4">
      <p>{message || "No users found."}</p>
    </div>
  );
}