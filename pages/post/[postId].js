import Image from "next/image";
import { blogs } from "../../blogsData/blogs"
import { AppLayout } from "../../components/AppLayout";
import Link from "next/link";

export default function Post({post}) {
    const {title, postContent, img} = post;
    return (
        <div className="h-full">
            <div className="max-w-screen-sm mx-auto bg-gradient-to-r from-indigo-500 to-indigo-800 md:flex-col dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-950 p-5 mt-10">
               <div className="my-10 bg-blue-500 w-20 px-5 text-center rounded hover:shadow-md hover:shadow-white">
               <Link href="/blogs" className="">back</Link>
               </div>
                <Image 
                className="object-cover w-full h-56 rounded-lg lg:w-100"
                src={img}
                alt=""
                height={244}
                width={'1000'}
                />

           <div className="mt-6 p-2 text-lg leading-8">
           <div dangerouslySetInnerHTML={{__html: postContent}}/>
           </div>
            </div>

        </div>
    )
}

Post.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>;
  };

// first we need to create a list of paths.
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths
export const getStaticPaths = async () => {
    const paths = blogs.map(post => ({
        params: {postId: post.postId}
    }))
    return {
      paths,
      fallback: true, // false or "blocking"
    }
  }

// then we find the post by postId
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
export async function getStaticProps(ctx) {
    const post = blogs.find(post => post.postId === ctx.params.postId)
    return {
        props: {
            post
        }
    }
}