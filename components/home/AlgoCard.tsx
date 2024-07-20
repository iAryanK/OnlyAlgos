import Link from "next/link";

type CardProps = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  contributor?: string;
};

export const AlgoCard = ({
  slug,
  title,
  description,
  tags,
  contributor,
}: CardProps) => {
  const colors = [
    "bg-slate-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-orange-200",
  ];

  return (
    <Link
      href={
        slug === "contribute"
          ? `https://github.com/iaryank/onlyalgos`
          : `/algos/${slug}`
      }
    >
      <div
        className={`dark:bg-zinc-800 shadow-lg rounded-lg p-4 m-4 hover:scale-105 transition-transform duration-300 ${
          colors[Math.floor(Math.random() * colors.length)]
        }`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>

        <div className="flex max-sm:flex-col sm:justify-between sm:items-center">
          <div className="flex flex-wrap mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-zinc-300 dark:bg-zinc-700 text-gray-500 rounded-full px-2 py-1 text-xs font-semibold mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          {contributor && (
            <p className="text-gray-500 text-sm mt-2">
              Contributor: {contributor}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
