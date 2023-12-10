import MorePosts from "@/components/MorePosts";
import SinglePost from "@/components/SinglePost";
import { SinglePostSkeleton } from "@/components/Skeleton";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

const PostPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <Suspense fallback={<SinglePostSkeleton />}>
        <SinglePost id={id} />
      </Suspense>

      <Separator className="my-12 max-w-3xl lg:max-w-4xl mx-auto" />

      <Suspense>
        <MorePosts postId={id} />
      </Suspense>
    </div>
  );
};
export default PostPage;
