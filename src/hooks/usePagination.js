import {useMemo} from "react";

export const usePagination = (totalPages) =>{
    let result =[];
    const meme = useMemo(() => {

        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
        }
        console.log(result)
        return result
    }, [totalPages])
    return meme
}