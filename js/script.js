// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

// timezone 그냥 UTC면 UTC 0인거


/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-6-JS/sw.js", {
    scope: "/ICS2O-Assignment-6-JS/",
  })
}

const getCountryList = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const countryListData = await result.json()
    console.log("list length : " + countryListData.length)
    const random = Math.floor(Math.random() * countryListData.length)
    console.log("random : " + random)
    const country = countryListData[random]
    console.log("country : " + country.name.common)
    
    console.log("test1 : " + JSON.stringify(Object.entries(country.currencies)[0][0]) + " / " + JSON.stringify(Object.values(country.currencies)[0].name))
    console.log("test2 : " + JSON.stringify(Object.entries(country.name.nativeName)[0][0])  + " / " + JSON.stringify(Object.values(country.name.nativeName)[0].common))
    
    var obj = countryListData
    
    // main info
    document.getElementById("country-name").innerHTML = "<h1>" + country.name.common + "</h1>"
    document.getElementById("country-flag").innerHTML = "<img src='https://flagcdn.com/h240/" + country.cca2.toLowerCase() + ".png'>"
    document.getElementById("country-info").innerHTML = 
      "The official name is : " + country.name.official +
      "<br>The native name is : " + JSON.stringify(Object.values(country.name.nativeName)[0].common).replaceAll('"', '') + "(" + JSON.stringify(Object.values(country.name.nativeName)[0].official).replaceAll('"', '') + ")" +
      "<br>The official currency is : " + Object.entries(country.currencies)[0][0] + "(" + JSON.stringify(Object.values(country.currencies)[0].name).replaceAll('"', '') + ")" +
      "<br>The capital city is : " + country.capital +
      "<br>The country is located in : " + country.subregion + "(" + country.region + ")" +
      "<br>The official language is : " + Object.entries(country.languages)[0][1]

    console.log(countryListData)
  } catch (err) {
    console.log(err)
  }
}

getCountryList(
  "https://restcountries.com/v3.1/all"
)
