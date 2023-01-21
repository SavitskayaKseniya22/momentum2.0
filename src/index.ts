import { MainPage } from './components/mainPage/mainPage'

const mainPage = new MainPage()
const mainContainer = document.querySelector('body')
mainContainer.innerHTML = mainPage.render()
