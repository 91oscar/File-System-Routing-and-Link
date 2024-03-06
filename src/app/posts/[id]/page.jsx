import Link from "next/link";

export default function Post({ params }) {
  console.log(params); // Output: { id: 1 }
  return (
    <div>
      <h1>Post Page {params.id}</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

// 1. Si en next.js los componentes son first server del porque puedo ver el (params sin usar "use client")
// 2 el nombre se params se puede cambiar? es un objeto? Al cambiar el noombre me da error pq
