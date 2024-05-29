import Link from "next/link";

export default function RoutingPage(){

    return (
        <div>
            <Link href="/f1/userimage" >Display User Image</Link>
            <br />
            <Link href="/about" >Got To About Page</Link>
            <br />
            Routing Page
        </div>
    )
}