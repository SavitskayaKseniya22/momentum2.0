import '../settings/settings.scss'

export class Settings {
  handleClick: (e: MouseEvent) => void
  static visibility: boolean = false

  constructor() {
    this.handleClick = this.clickListener.bind(this)
    this.initListener()
  }

  static renderContent() {
    return `${
      Settings.visibility
        ? `<div class="innerContainer settings"><h2>Settings</h2><button class="settingsCloseButton settingsToggleButton">close</button></div>`
        : `<button class="settingsOpenButton settingsToggleButton">open</button>`
    }`
  }

  static render() {
    return `<div class="container settings">
		${Settings.renderContent()}
	</div>`
  }

  private clickListener(e: MouseEvent) {
    const target = e.target as HTMLElement
    if (target.closest('.settingsToggleButton')) {
      Settings.visibility = !Settings.visibility
      document.querySelector('.container.settings').innerHTML = Settings.renderContent()
    }
  }

  initListener() {
    document.addEventListener('click', this.handleClick)
  }
}
