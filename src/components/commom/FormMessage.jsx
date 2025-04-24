export default function FormMessage({ texto, isError }) {
  if (!texto) return null;
  return <p className={isError ? "text-red-500" : "text-green-500"}>{texto}</p>;
}
