import { createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

type TravelState={


  popUpHeader:boolean,
  idTour:number,

  popUpCountries:boolean,
  popUpCalendar:boolean,
  popUpDays:boolean,
  popUpTourists:boolean,
  popUpRecall:boolean,
  popUpFilters:boolean,

  choosenCountries:string[],
  choosenDays:string[],
  errorDays:string,

  choosenTouristsChild:number,
  choosenTouristsAdult:number,

  choosenDates:string[],

  filters:boolean,
  filtersSeason:string[],
  filtersPluses:string[],
  filtersTime:number[],
  filtersFood:string[],


  popUpTouristsCard:boolean,
  choosenTouristsChildCard:number,
  choosenTouristsAdultCard:number,

  popUpRoom:boolean,
  choosenRoom:number,

  popUpFood:boolean,
  choosenFood:number


  boolSuccess:boolean,

  finishCountry:string,
  finishName:string,
  finishImage:string,
  finishDate:string,
  finishTourists:number,
  finishRoom:string,
  finishFood:string,
  finishTotal:number,

  boolValid:boolean,

  personalBool:boolean
}


const initialState: TravelState = {

  popUpHeader:false,


  idTour:101,

  popUpCountries:false,
  popUpCalendar:false,
  popUpDays:false,
  popUpTourists:false,
  popUpRecall:false,
  popUpFilters:false,

  choosenCountries:[],
  choosenDays:[],
  errorDays:"",

  choosenTouristsChild:0,
  choosenTouristsAdult:0,

  choosenDates:[],

  filters:false,
  filtersSeason:[],
  filtersPluses:[],
  filtersTime:[],
  filtersFood:[],
  
  popUpTouristsCard:false,

  choosenTouristsChildCard:0,
  choosenTouristsAdultCard:0,

  popUpRoom:false,
  choosenRoom:0,

  popUpFood:false,
  choosenFood:0,

  boolSuccess:false,
  finishCountry:'',
  finishName:'',
  finishImage:'',
  finishDate:'',
  finishTourists:0,
  finishRoom:'',
  finishFood:'',
  finishTotal:0,
  boolValid:false,
  personalBool:false
}

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    swapePopUpHeader(state,action){
      state.popUpHeader=action.payload
    },
    swapeIdTour(state,action){
      state.idTour=action.payload
    },
    boolPopUpRecall(state,action){
      state.popUpRecall=action.payload
    },
    swapeChoosenCountries(state,action){
      state.choosenCountries=action.payload
    },
    boolPopUpCounties(state,action){
      state.popUpCountries=action.payload
    },
    
    swapeChoosenDays(state,action){
      state.choosenDays=action.payload
    },
    boolPopUpDays(state,action){
      state.popUpDays=action.payload
    },
    swapeErrorDays(state,action){
      state.errorDays=action.payload
    },

    swapeChoosenChild(state,action){
      state.choosenTouristsChild=action.payload
    },
    swapeChoosenAdult(state,action){
      state.choosenTouristsAdult=action.payload
    },
    boolPopUpTourists(state,action){
      state.popUpTourists=action.payload
    },
    swapeChoosenDates(state,action){
      state.choosenDates=action.payload
    },
    boolPopUpCalendar(state,action){
      state.popUpCalendar=action.payload
    },
    boolFilters(state,action){
      state.filters=action.payload
    },

    filtersSeasonChoosen(state,action){
      state.filtersSeason=action.payload
    },

    filtersPlusesChoosen(state,action){
      state.filtersPluses=action.payload
    },
    filtersTimeChoosen(state,action){
      state.filtersTime=action.payload
    },
    filtersFoodChoosen(state,action){
      state.filtersFood=action.payload
    },


    swapeChoosenChildCard(state,action){
      state.choosenTouristsChildCard=action.payload
    },
    swapeChoosenAdultCard(state,action){
      state.choosenTouristsAdultCard=action.payload
    },
    boolPopUpTouristsCard(state,action){
      state.popUpTouristsCard=action.payload
    },


    boolPopUpRoom(state,action){
      state.popUpRoom=action.payload
    },
    swapeChoosenRoom(state,action){
      state.choosenRoom=action.payload
    },

    boolPopUpFood(state,action){
      state.popUpFood=action.payload
    },
    swapeChoosenFood(state,action){
      state.choosenFood=action.payload
    },

    boolSuccess(state,action){
      state.boolSuccess=action.payload
    },

    setFinishCountry(state,action){
      state.finishCountry=action.payload
    },
    setFinishName(state,action){
      state.finishName=action.payload
    },
    setFinishImage(state,action){
      state.finishImage=action.payload
    },
    setFinishDate(state,action){
      state.finishDate=action.payload
    },
    setFinishTourists(state,action){
      state.finishTourists=action.payload
    },
    setFinishRoom(state,action){
      state.finishRoom=action.payload
    },
    setFinishFood(state,action){
      state.finishFood=action.payload
    },
    setFinishTotal(state,action){
      state.finishTotal=action.payload
    },

    swapeBoolValid(state,action){
      state.boolValid=action.payload
    },

    swapePersonalBool(state,action){
      state.personalBool=action.payload
    }
   
  },
  
});

/* export const {} = articleSlice.actions; */
export const {swapePopUpHeader,boolPopUpRecall,
  swapeChoosenCountries,
  boolPopUpCounties,
  swapeChoosenDays,boolPopUpDays,
  swapeErrorDays,swapeChoosenChild,swapeChoosenAdult
  ,boolPopUpTourists,swapeChoosenDates,
  boolPopUpCalendar,boolFilters,
  filtersSeasonChoosen,
  filtersPlusesChoosen,filtersTimeChoosen,filtersFoodChoosen,
  swapeChoosenChildCard,swapeChoosenAdultCard,boolPopUpTouristsCard,
  boolPopUpRoom,swapeChoosenRoom,boolPopUpFood,
  swapeChoosenFood,swapeIdTour,boolSuccess,setFinishCountry,
  setFinishImage,setFinishName,setFinishFood,setFinishRoom,setFinishTotal,
  setFinishDate,setFinishTourists,swapeBoolValid,swapePersonalBool} = travelSlice.actions;
export default travelSlice.reducer;

