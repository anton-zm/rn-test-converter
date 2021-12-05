import { months, days } from "./consts"

export const getTextDate = (date: Date) => {
    const m = date.getMonth()
    const y = date.getFullYear()
    const d = date.getDate()
    const weekD = date.getDay()
    return `${days[weekD]}, ${d} ${months[m]} ${y}`
}