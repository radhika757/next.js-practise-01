import {useRouter} from "next/router";

const Number = () =>{
    const router = useRouter();
    const {id} = router.query;
    return(
        <div>Roll Number{id}</div>
    )
}

export default Number;