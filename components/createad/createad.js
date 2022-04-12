import Fetch from "../../lib/fetch"
import style from "./createad.module.css"

export default function CreateAd({data}){
    const sumbit = async (event) => {
        console.log(event.target)
        event.preventDefault()
        await Fetch("/api/ad/create",{
            method:"POST",
            body:JSON.stringify({
                title: event.target.title.value,
                work: event.target.work.value,
                area: event.target.area.value,
                description: event.target.description.value
            })
        })
    }

    return(
        <>
            <form onSubmit={sumbit} className={style.form}>
                <input type="text" placeholder="titel van de opdracht" name="title"/>
                <br/>
                <input type="text" placeholder="wat voor werk is het?" name="work"/>
                <br/>
                <input type="text" placeholder="in welke postcode?" name="area"/>
                <br/>
                <textarea placeholder="beschrijving van werk" name="description"/>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )
}

