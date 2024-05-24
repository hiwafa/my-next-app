export default ({params}: {
    params: {
        user: string
    }
})=> {

    return (
        <div>
            Username: {params.user}
        </div>
    )
}