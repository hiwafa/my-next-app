'use client'

import { notFound } from "next/navigation";

export default ({params, searchParams}: {
    params: {file: string},
    searchParams: {hi: string, ho: string}
})=> {

    console.log("Props: ", params, searchParams);

    if(searchParams?.id >= 10){
        notFound();
    }

    return (
        <div>
            file Page, {params.file} <br />
            search params: {searchParams.ho}
        </div>
    )
}