import { Component } from 'react'

class Shelf extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoItems: [
        'Sleep',
        'Eat',
        "Laundry",
        'Watch movie'
      ]
    }
  }

  render () {
    const shelfItems = this.state.shelfItems.map((item, id) => {
      return (
        <li key={id}>
          {item}
          <button onClick={() => this.props.addItem(item)}>+</button>
        </li>
      )
    })
    return (
      <div>
          {shelfItems}

      </div>
    )
  }
}

export default Shelf
