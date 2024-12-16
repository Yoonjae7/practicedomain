import RandomFact from '@/components/RandomFact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-400 to-pink-500">
      <h1 className="text-4xl font-bold mb-8 text-white">Random Fact Generator</h1>
      <RandomFact />
    </main>
  )
}

