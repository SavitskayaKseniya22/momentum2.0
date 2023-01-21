import '../mainPage/mainPage.scss'
import { Settings } from '../settings/settings'

export class MainPage {
  settings: Settings
  constructor() {
    this.settings = new Settings()
  }

  render() {
    return `<div>
		<h1>Momentum 2.0</h1>
    ${Settings.render()}
    
	</div>`
  }
}
