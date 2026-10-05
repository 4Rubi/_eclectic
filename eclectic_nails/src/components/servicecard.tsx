type ServiceCardProps = {
  title: string;
  description:string;
  image: string;
};

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-(--wwhite) inline-block shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-105 p-3 pb-6 rounded-xl">
      {/*polaroid-like image*/}
      <div className="w-full aspect-square overflow-hidden ">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl"/>
      </div>
      {/*caption*/}
      <div className="pt-5 text-center">
        <h3 className="text-lg font-medium text-black">
          {title}
        </h3>
        <p className="text-sm text-black/70 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}