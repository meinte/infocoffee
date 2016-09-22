import React from 'react';
import { expect } from 'chai';
import {filterRegions,filterCountries,filterVarieties,filterFlags} from '../src/js/filters'
import { DEFAULT_STATE } from '../src/js/reducers/uistate'


//data stub
const testData =[
  {
    id: 1,
    region: 'South America',
    land: 'Brazil',
    variety: ['Bourbon', 'Catuai', 'Caturra', 'Mundo Novo', 'Robusta'],
    img: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'
  },
  {
    id: 2,
    region: 'Africa',
    land: 'Kenya',
    variety: ['Batian', 'SL-28', 'SL-34', 'Riuri 11'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg'
  },
  {
    id: 3,
    region: 'Central America',
    land: 'Costa Rica',
    variety: ['Bourbon', 'Catuai', 'Caturra', 'Gesha', 'Typica', 'Villa Sarchi'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg'
  }

]

let uiState={}

describe('filters',() => {
  beforeEach(() => {
    uiState = {
      selectedRegion:DEFAULT_STATE,
      selectedCountry:DEFAULT_STATE,
      selectedVariety:DEFAULT_STATE
    }
  })
  describe('filterRegions(coffee,uistate)', () => {

    it('returns all regions when uitstates are empty', () => {
      expect(filterRegions(testData,uiState).length).to.equal(3)
    })

    it('returns proper region when a variety is selected', () => {
      uiState.selectedVariety = 'Batian'
      expect(filterRegions(testData,uiState)[0]).to.equal('Africa')
    })

    it('returns proper region when a country is selected', () => {
      uiState.selectedCountry = 'Kenya'
      expect(filterRegions(testData,uiState)[0]).to.equal('Africa')
    })

    it('throw error when state is malformed', () => {
      expect(()=> {filterRegions()}).to.throw(Error)
    })

  })

  describe('filterCountries (coffee,uistate)', () => {

    it('returns all countries when uitstates are empty', () => {
      expect(filterCountries(testData,uiState).length).to.equal(3)
    })

    it('returns proper country when a variety is selected', () => {
      uiState.selectedVariety = 'Batian'
      expect(filterCountries(testData,uiState)[0]).to.equal('Kenya')
    })

    it('returns proper country when a region is selected', () => {
      uiState.selectedRegion = 'Africa'
      expect(filterCountries(testData,uiState)[0]).to.equal('Kenya')
    })

    it('throw error when state is malformed', () => {
      expect(()=> {filterCountries()}).to.throw(Error)
    })

  })

  describe('filterVarieties (coffee,uistate)', () => {

    it('returns all countries when uitstates are empty', () => {
      expect(filterVarieties(testData,uiState).length).to.equal(12)
    })

    it('returns proper varieties when a region is selected', () => {
      uiState.selectedRegion = 'Africa'
      expect(filterVarieties(testData,uiState)[0]).to.equal('Batian')
    })

    it('returns proper varieties when a country is selected', () => {
      uiState.selectedCountry = 'Kenya'
      expect(filterVarieties(testData,uiState)[0]).to.equal('Batian')
    })

    it('throw error when state is malformed', () => {
      expect(()=> {filterVarieties()}).to.throw(Error)
    })

  })

})

