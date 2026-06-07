import { cn } from "@/lib/cn";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  const { className, children } = props;
  return <div className={cn("py-8 px-16 w-full", className)}>{children}</div>;
}
