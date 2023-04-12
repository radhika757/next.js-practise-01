import Link from "next/link";
const PageNotFound = () =>{
    return(
        <div>
            <h2>Page not found</h2>
            <Link href='/'>Go to Home page</Link>
        </div>
    )
}
export default PageNotFound;