import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

interface ProductCardProps {
  name: string;
  price: string;
  imgURL: string;
}

const oldLondonFont = localFont({
  src: "../public/fonts/Chomsky.otf",
});

const ProductCard = ({ name, price, imgURL }: ProductCardProps) => {
  return (
    // 'group' allows us to animate child elements when the parent is hovered
    <div className="group flex flex-col gap-3">
      <Link href="/item/123" className="block overflow-hidden bg-gray-100">
        <div className="relative aspect-[3/4] w-full">
          <Image
            alt={name}
            src={imgURL}
            fill // Industry standard: fill the container and use object-cover
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1 px-1">
        <Link href="/item/123" className="hover:underline underline-offset-4">
          <h3
            className={`text-white/90 tracking-wide ${oldLondonFont.className}`}
          >
            {name}
          </h3>
        </Link>
        <p className="text-sm font-bold text-white">${price} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;
