import type { NextApiRequest, NextApiResponse } from 'next'
import { profileDatas } from './data'; 

export async function GET() {
  // return new Response("The first api routing using next.js api");
  return Response.json(profileDatas);
}