type PageHeaderProps = { title: string; paragraph: string };

export default function PageHeader({
  title = '',
  paragraph = '',
}: PageHeaderProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400">{paragraph}</p>
    </div>
  );
}
