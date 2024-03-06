import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Link href="/posts/1">Posts</Link>
      <Link href="/posts/1/a">Posts/commentdID</Link>
    </div>
  )
}
