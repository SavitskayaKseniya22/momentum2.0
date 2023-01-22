import '../settings/settings.scss'

export class Settings {
  handleClick: (e: MouseEvent) => void
  static visibility: boolean = false
  static visibilityForAnotherBlocks = {
    time: false,
    date: false,
    greeting: false,
    quote: false,
    weather: false,
    audio: false,
    todolist: false,
  }
  static photoSource = { github: true, unsplash: false, flickr: false }
  static writtenTag: undefined | string = undefined
  static language: string = 'english'

  constructor() {
    this.handleClick = this.clickListener.bind(this)
    this.initListener()
  }

  private renderContent() {
    return `${
      Settings.visibility
        ? `<h2>Settings</h2>
        <button class="settings__visibility-own">close</button>
        <div class="settings__container-inner">
        <div class="settings__visibility-others">
        <h4>Visibility:</h4>
        <ul class="visibility">
          <li class="visibility__time">
            <label for="time">Время</label>
            <input type="checkbox" id="time" />
          </li>
          <li class="visibility__date">
            <label for="date">Дата</label>
            <input type="checkbox" id="date" />
          </li>

          <li class="visibility__greetings">
            <label for="greeting">Приветствие</label>
            <input type="checkbox" id="greeting" />
          </li>
          <li class="visibility__quote">
            <label for="quote">Цитата</label>
            <input type="checkbox" id="quote" />
          </li>
          <li class="visibility__weather">
            <label for="weather">Погода</label>
            <input type="checkbox" id="weather" />
          </li>
          <li class="visibility__player">
            <label for="player">Аудиоплеер</label>
            <input type="checkbox" id="player" />
          </li>
          <li class="visibility__todolist">
            <label for="todolist">Список дел</label>
            <input type="checkbox" id="todolist" />
          </li>
        </ul>
      </div>
      <div class="settings__background">
      <div class="settings__background-source">
        <h4>Background source:</h4>
        <ul>
          <li><label for="github">Github</label> <input type="radio" name="source" id="github" checked="" /></li>
          <li><label for="unsplash">Unsplash</label> <input type="radio" name="source" id="unsplash" /></li>
          <li><label for="flickr">Flickr</label> <input type="radio" name="source" id="flickr" /></li>
        </ul>
      </div>
      <div class="settings__background-tag">
        <label for="tag"
          ><h4>Tag:</h4>
          <input type="text" id="tag" class="tag"
        /></label>
      </div>
    </div>

    <div class="settings__language">
      <h4>Language:</h4>
      <ul>
        <li><label for="en">English</label> <input type="radio" name="language" id="en" checked="" /></li>
        <li><label for="ru">Russian</label> <input type="radio" name="language" id="ru" /></li>
      </ul>
    </div>
      </div>`
        : `<button class="settings__visibility-own">open</button>`
    }`
  }

  render() {
    return `<div class="settings__container-outer">
		${this.renderContent()}
	</div>`
  }

  private clickListener(e: MouseEvent) {
    const target = e.target as HTMLElement
    if (target.closest('.settings__visibility-own')) {
      Settings.visibility = !Settings.visibility
      document.querySelector('.settings__container-outer').innerHTML = this.renderContent()
    }
  }

  initListener() {
    document.addEventListener('click', this.handleClick)
  }
}
