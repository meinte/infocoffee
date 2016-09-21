import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import Flag from '../src/js/components/Flag'

describe("<Flag className='brazil' />", () => {
  it('calls componentDidMount', () => {
    const flagElem = mount(<Flag className='brazil' /> )
    expect(flagElem.props().className ).to.equal( 'brazil' )
  })
})

describe('')
