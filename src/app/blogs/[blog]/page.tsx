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
            resolve(`${params.blog}`);
        }, 4000)
    })

    return {
        title: {
            absolute: "",
            default: "Deault " + title,
            template: `%s | ${title}`
        },
        description: "page description for blog"
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