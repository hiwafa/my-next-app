export default ({
    params
}: {
    params: {
        slug: string[]
    }
})=> {

    return (
        <div>
            Single Doc: 
            {params.slug.map( (item, index) => {
                return <h2 key={index}>{item}</h2>
            })}
        </div>
    )
}