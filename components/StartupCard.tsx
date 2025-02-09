import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

//Invididual Startup Card.
const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card-date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span>{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          {/* Click author name to link to author profile  */}
          <Link href={`/user/${post.author?._id}`}>
            <p className="text=16-medium line-clamp-1">{post?.author?.name}</p>
          </Link>
          {/* Click post title to link to startup page */}
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
        </div>
        {/* Click profile to link to author profile */}
        <Link href={`/user/${post.author?._id}`}>
          <Image
            src="https://img.freepik.com/free-vector/cute-robot-holding-phone-with-laptop-cartoon-vector-icon-illustration-science-technology-isolated_138676-4870.jpg?t=st=1738926582~exp=1738930182~hmac=52f4d5ea8d008097a8a85a33f1f20c8432436b2787a41cbd508e1eb92db5fe98&w=826"
            alt="profile"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      {/* Click image to link to startup page */}
      <Link href={`/startup/${post._id}`}>
        <p className="startup-card-desc">{post.description}</p>
        <img src={post.image} alt="image" className="startup-card-img" />
      </Link>
      {/* Click category to link to category genres */}
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category.toLowerCase()}`}>
          <p className="text-16-medium">{post.category}</p>
        </Link>
        {/* Click 'Details' to link to startup page */}
        <Button className="startup-card-btn" asChild>
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
