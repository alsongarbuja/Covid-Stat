
const currentDate = () => {
    let date = new Date();

    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();

    if(month < 10){
        month = 0+month.toString()
    }

    if(day < 10){
        day = 0+day.toString()
    }

    return year+"-"+month+"-"+day
}

export default currentDate