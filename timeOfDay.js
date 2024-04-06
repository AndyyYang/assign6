const isMorning = ( time ) => time >= 4 && time < 12
const isAfternoon = ( time ) => time >= 12 && time < 17
const isEvening = ( time ) => time >= 17 || time < 4

const getTimeOfDay = ( time ) => {
    let timeOfDay
    if (time >= 4 && time < 12) {
        timeOfDay = "Morning"
    } else if (time >= 12 && time < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Evening"
    }

    return timeOfDay
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening }