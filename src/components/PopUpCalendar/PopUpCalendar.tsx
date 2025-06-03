import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import "./PopUpCalendar.css";
import exit from "../../assets/icons/exit.svg";
import { useAppDispatch } from "../../hook";
import { swapeChoosenDates ,boolPopUpCalendar} from "../../store/travelSlice";
export default function PopUpCalendar() {
  const dis = useAppDispatch();
  const calendar = [
    {
      month: "Январь",
      startWeek: 3,
      days: 31,
    },
    {
      month: "Февраль",
      startWeek: 6,
      days: 28,
    },
    {
      month: "Март",
      startWeek: 6,
      days: 31,
    },
    {
      month: "Апрель",
      startWeek: 2,
      days: 30,
    },
    {
      month: "Май",
      startWeek: 4,
      days: 31,
    },
    {
      month: "Июнь",
      startWeek: 7,
      days: 30,
    },
    {
      month: "Июль",
      startWeek: 2,
      days: 31,
    },
    {
      month: "Август",
      startWeek: 5,
      days: 31,
    },
    {
      month: "Сентябрь",
      startWeek: 1,
      days: 30,
    },
    {
      month: "Октябрь",
      startWeek: 3,
      days: 31,
    },
    {
      month: "Ноябрь",
      startWeek: 6,
      days: 30,
    },
    {
      month: "Декабрь",
      startWeek: 1,
      days: 31,
    },
  ];
  const [currentMonth, setCurrentMonth] = useState(0);

  function emptyDays(startWeekDay: number, days: number) {
    const monthDays = [];
    for (let i = 0; i < startWeekDay; i++) {
      monthDays.push(" ");
    }
    for (let i = startWeekDay; i < days + startWeekDay; i++) {
      monthDays.push(i - startWeekDay + 1);
    }

    return monthDays;
  }

  interface MonthMap {
    [key: string]: number;
  }

  const monthNames: MonthMap = {
    Январь: 0,
    Февраль: 1,
    Март: 2,
    Апрель: 3,
    Май: 4,
    Июнь: 5,
    Июль: 6,
    Август: 7,
    Сентябрь: 8,
    Октябрь: 9,
    Ноябрь: 10,
    Декабрь: 11,
  };

  function parseDate(dateString: string): Date | null {
    const match = dateString.match(/^(\d{1,2})(.*)$/);
    if (!match) {
      return null;
    }
    const day = parseInt(match[1], 10);
    const monthName = match[2].trim();
    const month = monthNames[monthName];

    if (
      isNaN(day) ||
      month === undefined ||
      day < 1 ||
      day > 31 ||
      month < 0 ||
      month > 11
    ) {
      return null;
    }

    return new Date(2024, month, day);
  }

  function sortDates(dates: string[]): string[] {
    const parsedDates = dates.map(parseDate);
    const validDates = parsedDates.filter((date) => date !== null) as Date[];
    validDates.sort((a, b) => a.getTime() - b.getTime());
    return validDates.map(
      (date) =>
        `${date.getDate()}${Object.keys(monthNames).find(
          (key) => monthNames[key] === date.getMonth()
        )}`
    );
  }
  const [dateFly, setDateFly] = useState<string[]>([]);

  interface DateParts {
    day: string;
    month: string;
  }

  function splitDateString(dateString: string): DateParts | null {
    const monthNames: { [key: string]: string } = {
      Январь: "Январь",
      Февраль: "Февраль",
      Март: "Март",
      Апрель: "Апрель",
      Май: "Май",
      Июнь: "Июнь",
      Июль: "Июль",
      Август: "Август",
      Сентябрь: "Сентябрь",
      Октябрь: "Октябрь",
      Ноябрь: "Ноябрь",
      Декабрь: "Декабрь",
    };

    const match = dateString?.match(/^(\d{1,2})(.*)$/);

    if (!match) {
      return null; // Некорректный формат строки
    }

    const day = match[1];
    const month = match[2].trim();

    if (!monthNames.hasOwnProperty(month)) {
      return null; // Месяц не найден
    }

    return {
      day: day,
      month: month,
    };
  }
  const allNumbers = document.querySelectorAll(
    ".pick-up-area__sub-calendar-number"
  );
  useEffect(() => {
    const date1 = dateFly[0];
    const date2 = dateFly[1];

    const parts1 = splitDateString(date1);
    const parts2 = splitDateString(date2);

    const parts1Day = parts1?.day;
    const parts2Day = parts2?.day;
    const parts1Month = parts1?.month;
    const parts2Month = parts2?.month;

    allNumbers.forEach((num) => {
      if (
        (num.classList.contains(`${parts1Month}`) &&
          num.textContent == parts1Day) ||
        (num.classList.contains(`${parts2Month}`) &&
          num.textContent == parts2Day)
      ) {
        num.classList.add("green");
      } else {
        num.classList.remove("green");
      }
    });
  }, [dateFly]);

  function dateOnToFly(num: string, month: string) {
    const str = num + month;

    setDateFly((dates) => {
      let bool = false;
      let indToDelete = -1;
      for (let i = 0; i < dates.length; i++) {
        if (dates[i] === str) {
          bool = true;
          indToDelete = i;
        }
      }

      if (dates.length < 2 && bool == false) {
        // Добавляем страну, если она выбрана

        const newDates = [...dates, str];
        const sortedDates: string[] = sortDates(newDates);
        console.log(sortedDates);

        return sortedDates;
      }
      if (dates.length > 1 && bool == false) {
        dates[1] = str;
        const sortedDates: string[] = sortDates(dates);
        console.log(sortedDates);
        return sortedDates;
      } else {
        dates.splice(indToDelete, 1);
        const sortedDates: string[] = sortDates(dates);
        console.log(sortedDates);
        return sortedDates;
      }
    });
  }

  const clearSelectionsDateFly = () => {
    setDateFly([]); // Очищаем выбранные страны
  };

  function chooseDateFly() {
    dis(swapeChoosenDates(dateFly));
    dis(boolPopUpCalendar(false))
  }

  return (
    <>
      <div className="modal-calendar">
        <div className="pick-up-area__sub-calendar">
          <div className="pick-up-area__sub-calendar-container">
          <div className="pick-up-area__sub-up">
                        <div className="pick-up-area__sub-up-container">
                            <div className="pick-up-area__sub-up-title">
                            <h1 className='pick-up-area__sub-up-title-text'>Дата</h1>
                            </div>
                            
                            <div className="pick-up-area__sub-up-exit">
                            <img className='pick-up-area__sub-up-exit-img' onClick={ ()=>dis(boolPopUpCalendar(false))} src={exit} alt="" />
                            </div>
                           
                        </div>
                          
                      </div>
            <div className="pick-up-area__sub-calendar-dates">
              <div className="pick-up-area__sub-calendar-arrow-outer">
                <img
                  onClick={() => {
                    currentMonth == 0
                      ? setCurrentMonth(11)
                      : setCurrentMonth((c) => (c = c - 1));
                  }}
                  className="pick-up-area__sub-calendar-arrow"
                  src={leftArrow}
                  alt=""
                />
              </div>
              <div className="pick-up-area__sub-calendar-main">
                <div className="pick-up-area__sub-calendar-month">
                  {" "}
                  {calendar[currentMonth].month}
                </div>

                <div className="pick-up-area__sub-calendar-days">
                  <div className="pick-up-area__sub-calendar-weekdays">
                    <p className="pick-up-area__sub-calendar-weekday">пн</p>
                    <p className="pick-up-area__sub-calendar-weekday">вт</p>
                    <p className="pick-up-area__sub-calendar-weekday">ср</p>
                    <p className="pick-up-area__sub-calendar-weekday">чт</p>
                    <p className="pick-up-area__sub-calendar-weekday">пт</p>
                    <p className="pick-up-area__sub-calendar-weekday">сб</p>
                    <p className="pick-up-area__sub-calendar-weekday">вс</p>
                  </div>
                  <div className="pick-up-area__sub-calendar-numbers">
                    {emptyDays(
                      calendar[currentMonth].startWeek,
                      calendar[currentMonth].days
                    ).map((item: any) => (

                      <div
                        onClick={() =>
                          dateOnToFly(item, calendar[currentMonth].month)
                        }
                        className={
                          "pick-up-area__sub-calendar-number " +
                          calendar[currentMonth].month
                        }
                      >
                        <p className="pick-up-area__sub-calendar-number-text">{item}</p>
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pick-up-area__sub-calendar-arrow-outer">
                <img
                  onClick={() => {
                    currentMonth == 11
                      ? setCurrentMonth(0)
                      : setCurrentMonth((c) => (c = c + 1));
                  }}
                  className="pick-up-area__sub-calendar-arrow"
                  src={rightArrow}
                  alt=""
                />
              </div>
            </div>
          </div>{" "}
          <div className="pick-up-area__sub-country-actions">
            <div className="pick-up-area__sub-country-actions-container">
              <div
                onClick={clearSelectionsDateFly}
                className="pick-up-area__sub-country-actions-item"
              >
                <p>Очистить</p>
              </div>
              <div
                onClick={chooseDateFly}
                className="pick-up-area__sub-country-actions-item"
              >
                <Button type="sub-width" text="ВЫБРАТЬ" color="black"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
