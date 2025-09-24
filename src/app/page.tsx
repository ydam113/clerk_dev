import Image from 'next/image'

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The Home component renders a basic page with a heading and a Vercel logo.
 *
 * @returns {JSX.Element} The Home component.

/*******  873fc4d3-42d1-49fe-87ce-a44c19f6f73d  *******/
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </main>
  )
}
