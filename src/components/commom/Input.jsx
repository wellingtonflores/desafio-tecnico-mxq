export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl
                         focus:outline-none focus:border-sky-500"
    />
  );
}
