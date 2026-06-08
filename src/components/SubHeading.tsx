import { cn } from "@/lib/cn";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}
export default function SubHeading(props: SubHeadingProps) {
  const { children, className } = props;
  return (
    <div
      className={cn(
        "w-full ps-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-color before:rounded-full",
        className,
      )}
    >
      <h4 className="font-bold text-xl md:text-2xl font-nunitoSans text-black">
        {children}
      </h4>
    </div>
  );
}
