type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button ({text, href, onClick, type="button",}:ButtonProps){
  const styles = "inline-block bg-(--brown) text-black px-8 py-3 rounded-full font-medium transition hover:scale-105";

  if (href) {
    return (
      <a href={href} className={styles}> {text} </a>
    );
  }
  return(
    <button type={type} onClick={onClick} className={styles}>
      {text}
    </button>
  );
}
