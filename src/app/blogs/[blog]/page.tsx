import { Metadata } from "next"

type Props = {
    params: {
        blog: string
    }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Blog-${params.blog}`
    }
}

export default ({params}: {
    params: {
        blog: string
    }
})=> {


    return (
        <div>
           Single Blog: {params.blog}
        </div>
    )
}