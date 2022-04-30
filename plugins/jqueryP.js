import { onLoad } from "../helpers/onLoad";

export default ({ app }) => {

  onLoad(() => {

    console.log("hello from jquery");
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    script.defer = true
    document.head.appendChild(script)

  })
}