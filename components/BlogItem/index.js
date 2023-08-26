import Image from "next/image";
import Link from "next/link";

export default function BlogItem({title, img, date, metaDescription, postId}) {
  return (
    <div class="lg:flex mt-5">
      <Image
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={img}
        alt=""
        height={244}
        width={'1000'}
      />

      <div class="flex flex-col justify-between py-6 lg:mx-6">
        <Link
          href={`/post/${postId}`}
          class="text-xl font-semibold hover:underline text-white "
        >
          {title}
        </Link>

        <p className="text-white font-medium">
          {metaDescription}
        </p>

        <span class="text-sm text-gray-400">
          On: {date}
        </span>
      </div>
    </div>
  );
}
