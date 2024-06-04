import type { NextApiRequest, NextApiResponse } from 'next'
import { profileDatas } from './data'; 

export async function GET() {
  // return new Response("The first api routing using next.js api");
  return Response.json(profileDatas);
}


export async function POST(request: Request){
  const requestedData = await request.json();
  const newProfile = {
    id: profileDatas.length+1,
    username: requestedData.username
  }

  profileDatas.push(newProfile);

  return new Response(JSON.stringify(newProfile), {
    headers: { 
      "Content-Type": "application/json"
    },
    status: 201 // 201 indicates: a new resource has been created
  })

}