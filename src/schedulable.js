export const Schedulable = (date, time) => {
  const getDateAsDate = () => {
    if (date === "") return null;
    const timeString = time === "" ? "T23:59:59" : "T" + time + ":00";
    return new Date(date + timeString);
  };

  const dateFormatted = () => {
    if (date === "") return date;
    const month = date[5] === "0" ? date.slice(6, 7) : date.slice(5, 7);
    const day = date[8] === "0" ? date.slice(9) : date.slice(8);
    const year = date.slice(0, 4);

    return month + "/" + day + "/" + year;
  };

  const timeFormatted = () => {
    if (time === "") return time;
    let hour = parseInt(time.slice(0, 2));
    const min = time.slice(2);
    const m = hour >= 12 ? "pm" : "am";
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}${min} ${m}`;
  };

  const setDate = (newDate) => {
    date = newDate;
  };

  const setTime = (newTime) => {
    time = newTime;
  };

  const getTime = () => {
    return time;
  }

  const getDate = () => {
    return date;
  }

  return {
    getDateAsDate,
    dateFormatted,
    timeFormatted,
    setDate,
    setTime,
    getTime,
    getDate
  };
}