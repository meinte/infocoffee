import React from 'react';
import { expect } from 'chai';
import uistate from '../src/js/reducers/uistate'
import {DEFAULT_STATE} from '../src/js/reducers/uistate'
import loadstate from '../src/js/reducers/loadstate'
import * as actions from '../src/js/actions'


describe('reducers',() => {
  beforeEach(() => {
    
  })
  describe('uistate', () => {
    it('has the default state with no input', () => {
      expect(uistate(undefined,{}).selectedRegion).is.equal(DEFAULT_STATE)
    })

    it('has the correct state on COUNTRY_SELECTED', () => {
      expect(uistate(undefined,{type:actions.COUNTRY_SELECTED, country:'Vietnam'}).selectedCountry).is.equal('Vietnam')
    })

    it('has the correct state on REGION_SELECTED', () => {
      expect(uistate(undefined,{type:actions.REGION_SELECTED, region:'Afrika'}).selectedRegion).is.equal('Afrika')
    })

    it('has the correct state on VARIETY_SELECTED', () => {
      expect(uistate(undefined,{type:actions.VARIETY_SELECTED, variety:'Var'}).selectedVariety).is.equal('Var')
    })

    it('overrides the existing state on VARIETY_SELECTED', () => {
      expect(uistate({selectedVariety:'test'},{type:actions.VARIETY_SELECTED, variety:'Var'}).selectedVariety).is.equal('Var')
    })

  })

  describe('loadstate',() => {
    it('has a loading state initially', () => {
      expect(loadstate(undefined,{})).is.equal('loading')
    })

    it('has a loading state initially', () => {
      expect(loadstate(undefined,{type:actions.LOAD_OK})).is.equal('loaded')
    })

    it('has a loading state initially', () => {
      expect(loadstate(undefined,{type:actions.LOAD_ERROR})).is.equal('error')
    })

  })

})

