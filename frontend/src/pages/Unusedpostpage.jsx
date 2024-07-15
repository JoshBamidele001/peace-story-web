// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Spinner from './Spinner';

// export default function PostPage() {
//   const { postSlug } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
//         const data = await res.json();
//         if (!res.ok) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         if (Array.isArray(data.posts) && data.posts.length > 0) {
//           setPost(data.posts[0]);
//         } else {
//           setError(true);
//         }
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [postSlug]);

//   if (loading) {
//     return <Spinner />;
//   }

//   if (error) {
//     return <div>Error loading post.</div>;
//   }

//   if (!post) {
//     return <div>Post not found.</div>;
//   }

//   return (
//     <main className="pt-24 mx-10 lg:mx-auto">
     
//      <div className='flex relative'>
//         <div className='sticky top-0'>
//             <img src={post.image}
//             className='p-3 w-96' alt={post.title} />
//             <div>{post.title}</div>
//             <div>{post.author}</div>
//             <p>{(post.content.length / 1000).toFixed(0)} mins</p>
//         </div>
//         <div>
//             <div
//             className="p-3 max-w-2xl mx-auto text-justify"
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           ></div>
//         </div>
//         <div></div>

//      </div>
     
      
     
      
      
//     </main>
//   );
// }
