import { NextResponse } from 'next/server'

const facts = [
  "The shortest war in history lasted 38 minutes.",
  "A group of flamingos is called a 'flamboyance'.",
  "The world's oldest known living tree is over 5,000 years old.",
  "Honeybees can recognize human faces.",
  "The longest English word is 189,819 letters long.",
  "Octopuses have three hearts.",
  "A 'jiffy' is an actual unit of time: 1/100th of a second.",
  "The Great Wall of China is not visible from space with the naked eye.",
  "Bananas are berries, but strawberries aren't.",
  "The shortest war in history lasted 38 minutes.",
]

export async function GET() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)]
  return NextResponse.json({ fact: randomFact })
}

