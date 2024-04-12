import { useState } from "react"
import { Postoffer } from "../../data/offers"

export const CreateOffer =() =>
{
    const [company, setCompany] = useState("")
    const [title, settitle] = useState("")
    const takeaction = () =>
    {
        Postoffer({Company:company, title:title}, setCompany, settitle)
    }
    return (
        <div className="flex gap-2">
            <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="company"/>
            <input value={title} onChange={(e) => settitle(e.target.value)}  type="text" placeholder="title"/>
            <button onClick={takeaction} className="h-10 p-2 border-2" > create </button>
        </div>
    )
}