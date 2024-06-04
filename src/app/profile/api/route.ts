import type { NextApiRequest, NextApiResponse } from 'next'
 
export async function GET() {
  return new Response("The first api routing using next.js api");
}