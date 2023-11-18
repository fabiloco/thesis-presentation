import { ReactNode } from "react";
import "../index.css";

interface MasonryItemProps {
  children: ReactNode;
}

export const ExpectedImpactItem: React.FC<MasonryItemProps> = ({
  children,
}) => {
  return (
    <div className="masonry-item columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      {children}
    </div>
  );
};
