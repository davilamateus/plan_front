export default function DateToInput(date: number) {

    let year = new Date(Number(date) * 1).getFullYear()
    let month = ''
    let day = ''
    if (new Date(Number(date) * 1).getMonth() < 10) {
        month = `0${new Date((Number(date) * 1)).getMonth() + 1}`
    } else {
        month = `${new Date((Number(date) * 1)).getMonth() + 1}`
    }
    if (new Date(Number(date) * 1).getDate() < 10) {
        day = `0${new Date(Number(date) * 1).getDate()}`
    } else {
        day = `${new Date(Number(date) * 1).getDate()}`
    }


    console.log(month)
    return `${year}-${month}-${day}`
}