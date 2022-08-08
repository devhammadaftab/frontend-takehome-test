export const date = {
    toString: (date: Date) => {
        let year = date.getFullYear();
        let month = ("0" + date.getMonth()).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return year + "-" + month + "-" + day
    },
    subtractYears: (numOfYears: number, date?: Date) => {
        let newDate = date ? date : new Date()
        newDate.setFullYear(newDate.getFullYear() - numOfYears)
        return newDate
    },
    subtractDays: (numOfDays: number, date?: Date) => {
        let newDate = date ? date : new Date()
        newDate.setDate(newDate.getDate() - numOfDays)
        return newDate
    },
    subtractMonths: (numOfMonths: number, date?: Date) => {
        let newDate = date ? date : new Date()
        newDate.setMonth(newDate.getMonth() - numOfMonths)
        return newDate
    },
}

