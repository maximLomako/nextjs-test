import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>Hello next js</h1>
      <div><Link href={'/posts'}><a>posts</a></Link></div>
      <div><Link href={'/about'}><a>about</a></Link></div>
    </>
  )
}