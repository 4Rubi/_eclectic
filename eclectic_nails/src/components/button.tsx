type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-[var(--brown)] text-white px-8 py-3 rounded-full text-sm font-medium transition hover:scale-105">
      {text}
    </button>
  );
}