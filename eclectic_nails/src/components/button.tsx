type ButtonProps = {
  text: string;
  href?: string;
};

export default function Button({ text, href }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className="inline-block bg-(--brown) text-white px-8 py-3 rounded-full text-sm font-medium transition hover:scale-105">
        {text}
      </a>
    );
  }
  return (
    <button className="bg-(--brown) text-white px-8 py-3 rounded-full text-sm font-medium transition hover:scale-105">
      {text}
    </button>
  );
}