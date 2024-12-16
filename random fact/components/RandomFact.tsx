'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function RandomFact() {
  const [fact, setFact] = useState<string>('Click the button to get a random fact!')

  const fetchRandomFact = async () => {
    const response = await fetch('/api/random-fact')
    const data = await response.json()
    setFact(data.fact)
  }

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        <p className="text-lg mb-4">{fact}</p>
        <Button onClick={fetchRandomFact} className="w-full">
          Get Random Fact
        </Button>
      </CardContent>
    </Card>
  )
}

