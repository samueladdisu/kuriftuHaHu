import { onLoad } from "../helpers/onLoad";

export default ({ app }) => {

  onLoad(() => {

    console.log("hello from scroll to plugin");
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollToPlugin.min.js'
    script.defer = true
    document.head.appendChild(script)

  })
}