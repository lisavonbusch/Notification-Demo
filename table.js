'use strict';

const e = React.createElement;

class NotificationTable extends React.Component {
    constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const notifications = await this.getNotifications()
    this.state = this.setState({notifications})
  }

  render() {
    if (this.state?.notifications) {
      const notifications = this.state.notifications

      const body = notifications.map((value) => {
        return e('tr', null, [
          e('td', null, value.id),
          e('td', null, value.title),
          e('td', null, value.message),
          e('td', null, value.timestamp),
          e('td', null, value.action),
          e('td', null, value.silent)
        ])
      })

      return e(
        'table',
        null,
        [ e('thead', null, e('tr', null, [
          e('th', null, "ID"),
          e('th', null, "Title"),
          e('th', null, "Message"),
          e('th', null, "Timestamp"),
          e('th', null, "Action"),
          e('th', null, "Silent")
          ]
          )),
          e('tbody', null, body)]
      )
    }
    return null
  }
  async getNotifications() {
    const request = new Request('http://localhost/notifications/2', {
      method: 'GET'
    });

    const response = await fetch(request)
    if (response.ok) {
      return await response.json()
    }
  }
}

const domContainer = document.querySelector('#table_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(NotificationTable));