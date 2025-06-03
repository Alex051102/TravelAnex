import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
import exit from "../src/assets/icons/exit.svg";
import successImg from "../src/assets/icons/success.svg";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Tours from "./components/Tours/Tours";
import HotelCard from "./components/TourCard/TourCard";
import PopUpRecall from "./components/PopUpRecall/PopUpRecall";
import { useAppSelector } from "./hook";
import PopUpCountries from "./components/PopUpCountries/PopUpCountries";
import PopUpDays from "./components/PopUpDays/PopUpDays";
import PopUpTourists from "./components/PopUpTourists/PopUpTourists";
import PopUpCalendar from "./components/PopUpCalendar/PopUpCalendar";
import Filters from "./components/Filters/Filters";
import PopUpTouristsCard from "./components/PopUpTouristsCard/PopUpTouristsCard";
import PopUpRoom from "./components/PopUpRoom/PopUpRoom";
import PopUpFood from "./components/PopUpFood/PopUpFood";
import TourCard from "./components/TourCard/TourCard";
import Hotels from "./components/Hotels/Hotels";
import HotelCardZ from "./components/HotelCardZ/HotelCardZ";
import PopUpSucces from "./components/PopUpSucces/PopUpSucces";
import PopUpSubHeader from "./components/PopUpSubHeader/PopUpSubHeader";
import Finish from "./components/Finish/Finish";
import FinishSuccess from "./components/FinishSuccess/FinishSuccess";
function App() {

  const headerBool=useAppSelector(state=>state.travel.popUpHeader)
  const recallBool = useAppSelector((state) => state.travel.popUpRecall);
  const countriesBool = useAppSelector((state) => state.travel.popUpCountries);
  const daysBool = useAppSelector((state) => state.travel.popUpDays);
  const touristsBool = useAppSelector((state) => state.travel.popUpTourists);
  const calendarBool = useAppSelector((state) => state.travel.popUpCalendar);
  const filtersBool = useAppSelector((state) => state.travel.filters);

  const touristsCardBool = useAppSelector((state) => state.travel.popUpTouristsCard);
  const roomBool = useAppSelector((state) => state.travel.popUpRoom);
  const foodBool = useAppSelector((state) => state.travel.popUpFood);

  const succesBool=useAppSelector(state=>state.travel.boolSuccess)
 
  return (
    <>
      <Header></Header>
      {recallBool ? <PopUpRecall></PopUpRecall> : ""}
      {countriesBool ? <PopUpCountries></PopUpCountries> : ""}
      {daysBool ? <PopUpDays></PopUpDays> : ""}
      {touristsBool ? <PopUpTourists></PopUpTourists> : ""}
      {calendarBool ? <PopUpCalendar></PopUpCalendar> : ""}
      {filtersBool ? <Filters></Filters> : ""}

      {touristsCardBool ? <PopUpTouristsCard></PopUpTouristsCard> : ""}
      {roomBool ? <PopUpRoom></PopUpRoom> : ""}
      {foodBool ? <PopUpFood></PopUpFood> : ""}
      {succesBool ? <PopUpSucces></PopUpSucces>:''}
      {headerBool?<PopUpSubHeader></PopUpSubHeader>:''}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/hotels" element={<Hotels></Hotels>} />
        <Route path="/tour/:id" element={<TourCard></TourCard>} />
        <Route path="/hotel/:id" element={<HotelCardZ></HotelCardZ>} />
        <Route path="/finish" element={<Finish></Finish>}></Route>
        <Route path="/success" element={<FinishSuccess></FinishSuccess>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
