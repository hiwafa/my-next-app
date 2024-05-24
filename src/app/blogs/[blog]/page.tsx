import { Metadata } from "next"

type Props = {
    params: {
        blog: string
    }
}

// export const generateMetadata = ({params}: Props): Metadata => {
//     return {
//         title: `Blog-${params.blog}`
//     }
// }

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {

    const title = await new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(`Blog ${params.blog}`);
        }, 4000)
    })

    return {
        title
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