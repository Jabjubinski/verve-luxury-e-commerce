import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

interface ProductCardProps {
  name: string;
  price: string;
  imgURL: string;
  id: string | number | any;
}

const oldLondonFont = localFont({
  src: "../public/fonts/Chomsky.otf",
});

const ProductCard = ({ id, name, price, imgURL }: ProductCardProps) => {
  return (
    <div className="group flex flex-col gap-3">
      <Link href={`/shop/${id}`} className="block overflow-hidden bg-gray-100">
        <div className="relative aspect-3/4 w-full">
          <Image
            alt={name}
            src={imgURL}
            fill
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
