
import(import.meta.url
  .split('?')[1]
  .split('&')
  .map(p => p.split('='))
  .find(([p]) => p === 'component')[1]
).then(({ default: App }) => {
  const app = React.createElement(App)
  const appDiv = document.getElementById('app')
  ReactDOM.render(app, appDiv)
})
