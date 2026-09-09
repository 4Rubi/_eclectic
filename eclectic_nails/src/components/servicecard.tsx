type ServiceCardProps = {
  title: string;
};

export default function ServiceCard({ title }: ServiceCardProps) {
  return (
    <div className="bg-(--pink) h-64 flex items-end justify-center pb-6">
      <p className="text-black text-sm">
        {title}
      </p>
    </div>
  );
}