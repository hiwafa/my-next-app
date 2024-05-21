'use client'
export default ({params, searchParams}: {
    params: {file: string},
    searchParams: {hi: string, ho: string}
})=> {

    console.log("Props: ", params, searchParams);

    return (
        <div>
            file Page, {params.file} <br />
            search params: {searchParams.ho}
        </div>
    )
}