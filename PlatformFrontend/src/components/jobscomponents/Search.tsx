import { useState } from "react"

export const JobSearch = ({settypequery,setserchquery,setSearch, setofsset}:{settypequery:any,setserchquery:any,setSearch:any, setofsset:any}) => {
    const [serch, setsearch] = useState("")
    const [type, settype] = useState("title")
    const takeaction = () =>{
        console.log("click")
        settypequery(type)
        setserchquery(serch)
        setSearch((p:boolean) => !p)
        setofsset(0)
    }

    return (
        <div className="w-full flex  items-center justify-center   mt-5">
            <div className="flex w-[90%]  flex-col gap-x-6 items-center rounded border-2 ">
            <div className="flex flex-row  justify-evenly items-center mt-5 w-96">
                    <h1 className="">Search Query:</h1>
                    <input className="rounded h-10 text-center" onChange={(e) => setsearch(e.target.value)} value={serch} placeholder="  job / company"></input>

                </div>
                <div className="flex flex-row w-96 justify-evenly items-center mt-5">
                    <TypeButton type={type} typesetter={settype} typetext="title"/>
                    <TypeButton type={type} typesetter={settype} typetext="Company"/>
                </div>
                <div onClick={takeaction} className=" flex justify-center items-center  w-32 h-10 rounded mt-5 hover:bg-green-950 bg-green-700   mb-5 cursor-pointer">
                    <h1 className="font-bold text-white">
                            Find Jobs
                    </h1>
                </div>
            </div>
        </div>
    )
}


const TypeButton = ({type, typesetter, typetext}:{type: string,typesetter:React.Dispatch<React.SetStateAction<string>>,typetext:string  }) =>
{
    return (
        <div onClick={() => typetext !== type && typesetter(typetext)} className={`${type ===typetext ? "bg-green-700 " : "cursor-pointer border-2"} h-10 rounded min-w-[100px] flex items-center justify-center`}>
            {typetext.length === 0 ? "none" : "by "  + typetext}
        </div>
    )
}