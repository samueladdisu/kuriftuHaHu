

export default () => {

  const script = document.createElement('script')
  script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js'
  script.defer = true
  document.head.appendChild(script)
  console.log("hello from swiper");


}