import React, { Component } from 'react'
import { connect } from 'redaction'
import actions from '../../redux/actions'

import Order from '../../components/Order/Order'
import WidthContainer from '../../components/layout/WidthContainer/WidthContainer'

import NewUser from './NewUser/NewUser'
import Registered from './Registered/Registered'

//
// const titles = ['Cm. Vol', 'Cm. Cost', 'Cost', 'Volume', 'Price']
//
// const rows = [
//   { cmvol: '0.123', cmcost: '1.124',  cost: '12',  volume: '12344', price: '100' },
//   { cmvol: '0.12',  cmcost: '2.123',  cost: '12',  volume: '12344', price: '100' },
//   { cmvol: '0.23',  cmcost: '1.1123', cost: '12',  volume: '12344', price: '100' },
//   { cmvol: '0.3',   cmcost: '1.13',   cost: '12',  volume: '12344', price: '100' },
// ]

class Home extends Component {
  componentWillMount () {
    actions.user.getUser()

    setTimeout(() => actions.balance.fetch(), 1000)
  }

  render() {
    const { name } = this.props

    return (
      <section>
        <WidthContainer>
          <Order />
          {
            name === undefined ? (
              <NewUser />
            ) : (
              <Registered />
            )
          }
        </WidthContainer>
      </section>
    )
  }
}

export default connect ({
 name: 'user.name'
})(Home)
