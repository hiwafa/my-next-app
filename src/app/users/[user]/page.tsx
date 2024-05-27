"use client"

import { useRouter } from "next/navigation"

export default ({params}: {
    params: {
        user: string
    }
})=> {

    const router = useRouter();

    const backToHome = ()=> {
        router.push('/');
    }


    const goBack = ()=> {
        router.back();
    }

    const goForward = ()=> {
        router.forward();
    }

    return (
        <div>
            Username: {params.user}
            <br />
            <button onClick={backToHome}>Go to Home</button>
            <br />
            <button onClick={goBack}>Go Back</button>
            <br />
            <button onClick={goForward}>Go Forward</button>
        </div>
    )
}