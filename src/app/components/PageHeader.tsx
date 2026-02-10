type PageHeaderProps = {
  title: string;
  description: string;
  containerClassName?: string;
};

export default function PageHeader({
  title,
  description,
  containerClassName = "max-w-7xl",
}: PageHeaderProps) {
  return (
    <section className="border-b border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-black px-4 py-10 md:py-14">
      <div className={`${containerClassName} mx-auto`}>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-base md:text-lg text-gray-300 max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
