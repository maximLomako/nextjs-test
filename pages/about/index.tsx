import Router from "next/router";

export default function Index() {
  const onClickHandler = (page: string) => {
    Router.push(`/${page}`)
  }
  return (
    <>
      <h1>About next js</h1>
      <button onClick={() => {onClickHandler('posts')}}>go back to posts</button>
      <button onClick={() => {onClickHandler('')}}>go back to home</button>
    </>
  )
}