'use client'
export default (props)=> {

    console.log("Props: ", props);

    return (
        <div>
            file Page, {props.params.file} <br />
            search params: {props.searchParams.hi}
        </div>
    )
}