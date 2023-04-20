import { configureStore, createSlice } from '@reduxjs/toolkit'
import JsonDepositBankNameList from './json/depositBankNameList.json';

let depositBankingSector = createSlice({
    name : 'depositBankingSector',
    initialState : 'allBankingSector',
    reducers : {
        setDepositBankingSector(state, sectorName){
            return sectorName.payload
        }
    }
})

let depositPeriod = createSlice({
    name : 'depositPeriod',
    initialState : '12',
    reducers : {
        setDepositPeriod(state, textPeriod){
            return textPeriod.payload
        }
    }
})

let depositInterest = createSlice({
    name : 'depositInterest',
    initialState : 'all-interest',
    reducers : {
        setDepositInterest(state, textInterest){
            return textInterest.payload
        }
    }
})

let saveDepositBankNameList = createSlice({
    name : 'saveDepositBankNameList',
    initialState : JsonDepositBankNameList,
    reducers : {
        setSaveDepositBankNameList(state, BankNameList){
            return BankNameList.payload
        }
    }
})

let depositClickedBankName = createSlice({
    name : 'depositClickedBankName',
    initialState : 'no-data',
    reducers : {
        setDepositClickedBankName(state, clickedBankName){
            return clickedBankName.payload
        }
    }
})


export let {setDepositBankingSector} = depositBankingSector.actions;
export let {setDepositPeriod} = depositPeriod.actions;
export let {setDepositInterest} = depositInterest.actions;
export let {setSaveDepositBankNameList} = saveDepositBankNameList.actions;
export let {setDepositClickedBankName} = depositClickedBankName.actions;


//Savings

let savingsBankingSector = createSlice({
    name : 'savingsBankingSector',
    initialState : 'allBankingSector',
    reducers : {
        setSavingsBankingSector(state, sectorName){
            return sectorName.payload
        }
    }
})


let savingsPeriod = createSlice({
    name : 'savingsPeriod',
    initialState : '12',
    reducers : {
        setSavingsPeriod(state, textPeriod){
            return textPeriod.payload
        }
    }
})

let savingsInterest = createSlice({
    name : 'savingsInterest',
    initialState : 'all-interest',
    reducers : {
        setSavingsInterest(state, textInterest){
            return textInterest.payload
        }
    }
})

let saveSavingsBankNameList = createSlice({
    name : 'saveSavingsBankNameList',
    initialState : JsonDepositBankNameList,
    reducers : {
        setSaveSavingsBankNameList(state, BankNameList){
            return BankNameList.payload
        }
    }
})

let savingsClickedBankName = createSlice({
    name : 'savingsClickedBankName',
    initialState : 'no-data',
    reducers : {
        setSavingsClickedBankName(state, clickedBankName){
            return clickedBankName.payload
        }
    }
})

let savingsAccumulation = createSlice({
    name : 'savingsAccumulation',
    initialState : 'all-accumulation',
    reducers : {
        setSavingsAccumulation(state, accumulation){
            return accumulation.payload
        }
    }
})

export let {setSavingsBankingSector} = savingsBankingSector.actions;
export let {setSavingsPeriod} = savingsPeriod.actions;
export let {setSavingsInterest} = savingsInterest.actions;
export let {setSaveSavingsBankNameList} = saveSavingsBankNameList.actions;
export let {setSavingsClickedBankName} = savingsClickedBankName.actions;
export let {setSavingsAccumulation} = savingsAccumulation.actions;


// Annuity

let annuitySavingAnnuityType = createSlice({
    name : 'annuitySavingAnnuityType',
    initialState : '201',
    reducers : {
        setAnnuitySavingAnnuityType(state, annuityType){
            return annuityType.payload
        }
    }
})

export let {setAnnuitySavingAnnuityType} = annuitySavingAnnuityType.actions;


export default configureStore({
  reducer: {
    depositBankingSector : depositBankingSector.reducer,
    depositPeriod : depositPeriod.reducer,
    depositInterest : depositInterest.reducer,
    saveDepositBankNameList : saveDepositBankNameList.reducer,
    depositClickedBankName : depositClickedBankName.reducer,

    savingsBankingSector : savingsBankingSector.reducer,
    savingsPeriod : savingsPeriod.reducer,
    savingsInterest : savingsInterest.reducer,
    saveSavingsBankNameList : saveSavingsBankNameList.reducer,
    savingsClickedBankName : savingsClickedBankName.reducer,
    savingsAccumulation : savingsAccumulation.reducer,

    annuitySavingAnnuityType : annuitySavingAnnuityType.reducer,
   }
}) 