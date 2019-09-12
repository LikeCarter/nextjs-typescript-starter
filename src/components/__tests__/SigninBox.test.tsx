/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import SigninBox from '../SigninBox'

describe('SigninBox', () => {

  it('renders the form', () => {
    const login = shallow(<SigninBox />)
    expect(login.find('form')).toHaveLength(1)
  })

  it('changes the text of email', () => {
    const login = shallow(<SigninBox />)
    login.find('#formEmail').simulate('change', {
      target: {
        name: 'email',
        value: 'some@test.com',
      },
    })
    expect(
      login
        .update()
        .find('#formEmail')
        .props().value
    ).toEqual('some@test.com')
  })
})
