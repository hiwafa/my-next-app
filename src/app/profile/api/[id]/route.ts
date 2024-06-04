import { profileDatas } from "../data";

export async function GET(request: Request, {params}: {params: {id: string}}){

    const profile = profileDatas.find( pro => pro.id === parseInt(params.id));

    return Response.json(profile);

}