import { useState } from "react"

export const JobSearch = () => {
    const [serchquery, setserchquery] = useState("")
    const [typequery, settypequery] = useState("")

    return (
        <div className="h-20 w-full flex  items-center justify-center">
            <div className="flex  flex-row gap-x-6 items-center ">
                <input className="rounded h-10" onChange={(e) => setserchquery(e.target.value)} value={serchquery} placeholder="  job / company"></input>
                <h1 className="font-bold">filters:</h1>
                <TypeButton type={typequery} typesetter={settypequery} typetext=""/>
                <TypeButton type={typequery} typesetter={settypequery} typetext="title"/>
                <TypeButton type={typequery} typesetter={settypequery} typetext="Company"/>
            </div>

        </div>
    )
}


const TypeButton = ({type, typesetter, typetext}:{type: string,typesetter:React.Dispatch<React.SetStateAction<string>>,typetext:string  }) =>
{
    return (
        <div onClick={() => typetext !== type && typesetter(typetext)} className={`${type ===typetext ? "bg-blue-700 cursor-not-allowed" : "cursor-pointer border-2"} h-10 rounded min-w-[100px] flex items-center justify-center`}>
            {typetext.length === 0 ? "none" : typetext}
        </div>
    )
}