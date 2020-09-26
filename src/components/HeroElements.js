import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const HeroElements = () => {
  const { scrollYProgress } = useViewportScroll()
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [90, 360, 720])

  return (
    <div className="container hero-elements">
      <p className="additional-text">
        Self-driven outdoor, <br />
        travel & adventure photographer. <br />
        Based in <span>New York </span>
      </p>
      <a href="#!" className="showreel-container">
        <motion.svg
          style={{ rotate }}
          whileHover={{ rotate: rotate - 90 }}
          xmlns="http://www.w3.org/2000/svg"
          width="174"
          height="182"
          fill="none"
          viewBox="0 0 174 182"
        >
          <path
            fill="#322E2E"
            d="M58.919 9.734l-1.876.983 2.569 5.745-4.105 2.152c-2.73 1.43-3.498 2.073-3.986 3.341-.486 1.215-.416 2.751.183 4.09.86 1.922 2.513 2.975 4.226 2.663.836-.144 1.615-.473 3.532-1.478l5.898-3.091-6.441-14.405zm1.446 8.412l2.337 5.227-3.98 2.086c-1.147.6-1.77.874-2.236.985-1.197.255-2.167-.303-2.747-1.6-.521-1.166-.417-2.313.25-3.009.443-.446 1.291-1.024 2.375-1.591l4.001-2.098zM42.724 19.114l-1.6 1.243 8.698 13.142 1.601-1.243-8.699-13.142zM28.638 34.532c.177-.224.241-.328.321-.415.675-.726 1.043-.707 1.73.04l3.176 3.459c1.372 1.494 2.012 1.843 3.085 1.69 1.025-.136 2.212-.93 3.641-2.468 2.473-2.662 2.864-4.915 1.253-7.19l-1.461 1.573c.957 1.355.681 2.55-1.021 4.382-1.462 1.574-2.727 1.969-3.526 1.1-.558-.609-.46-1.267.295-2.288a717.215 717.215 0 002.556-3.441c1.366-2.094 1.435-3.827.19-5.183-1.484-1.616-3.678-1.293-5.621.799-1.574 1.694-2.204 3.512-1.84 5.368-1.055-.87-2-.752-2.996.32-.465.502-.594.71-.771 1.177l.99 1.077zm5.586.554c-.638-.695-1.244-1.494-1.435-1.946-.573-1.319.042-3.57 1.359-4.988 1.108-1.193 2.486-1.5 3.204-.719.287.313.446.834.38 1.319-.05.503-.29 1.005-.966 2.008-2.058 3.114-2.058 3.114-2.542 4.326zM34.576 42.695l-12.374-1.933c-1.133-1.719-1.217-2.355-.438-3.652.255-.425.452-.662.905-1.006l-1.54-1.084c-.424.567-.65.898-.893 1.304-1.046 1.742-1.08 2.986-.102 4.597l7.74 12.94 1.18-1.965-5.564-8.988 9.833 1.875 1.253-2.088zM16.156 60.922c-2.46-.616-4.304 1.067-5.225 4.79-.836 3.38.028 5.946 2.24 6.588 1.31.38 2.343-.084 3.198-1.388.51-.789.884-1.616 1.604-3.453.885-2.305 1.395-2.896 2.365-2.615.993.288 1.312 1.638.852 3.5-.256 1.034-.704 1.865-1.298 2.407-.44.414-.859.54-1.643.484l-.478 1.931c1.174.242 1.874.15 2.67-.334 1.148-.727 1.913-1.958 2.385-3.866.398-1.61.412-2.837.07-3.996-.343-1.158-1.25-2.087-2.334-2.401-1.015-.295-1.981-.008-2.734.784-.56.601-.848 1.182-1.665 3.212-.647 1.636-1.021 2.463-1.259 2.838-.419.617-.876.805-1.463.635-1.061-.308-1.386-1.733-.868-3.825.352-1.425.964-2.528 1.603-2.959.435-.293.814-.355 1.474-.287l.506-2.045zM8.83 77.674l-.088 2.035 5.981.301c.962.048 1.614.2 2.12.462 1.17.652 1.925 2.232 1.854 3.913-.095 2.2-1.316 3.278-3.638 3.161l-6.638-.333-.088 2.035 6.709.337c1.712.087 2.231.041 2.9-.21 1.457-.543 2.348-2.135 2.441-4.313.093-2.153-.594-3.683-2.212-4.879l6.357.32.087-2.036-15.786-.793zM21.424 100.627c-.67-3.922-3.578-6.166-7.126-5.456-3.64.728-5.646 3.906-4.973 7.852.666 3.899 3.547 6.124 7.025 5.428 3.732-.746 5.75-3.854 5.073-7.824zm-1.674.384c.442 2.591-1.014 4.669-3.663 5.199-2.626.525-4.622-.838-5.068-3.453-.22-1.284-.004-2.535.617-3.504.617-.993 1.544-1.564 2.972-1.85 2.603-.52 4.688.945 5.142 3.608zM22.357 109.526l-8.552 9.218.987 2.254 9.317-1.436-6.917 6.919.987 2.254 12.08-1.155-.977-2.232-9.462 1.165 6.948-6.909-.968-2.21-9.357 1.403 6.863-7.103-.95-2.168zM23.594 137.377l1.205 1.665 4.403-3.737c1.024-.869 1.774-1.196 2.623-1.145 1.104.083 2.055.635 2.762 1.61.263.364.42.662.677 1.217l1.582-1.342a4.583 4.583 0 00-.534-.938c-.623-.861-1.442-1.431-2.33-1.575-.645-.13-1.28-.086-2.426.175l2.067-1.753-1.205-1.665-8.824 7.488zM40.656 151.349c-1.254.663-2.59.377-3.914-.867-1.874-1.759-2.142-3.755-.806-5.987l7.718 7.248c.97-1.285 1.285-1.829 1.6-2.824.777-2.435.069-4.973-1.908-6.83-2.716-2.55-6.358-2.29-8.676.603-2.244 2.8-1.894 6.423.891 9.038 2.097 1.97 4.567 2.384 6.71 1.137l-1.615-1.518zm-3.73-8.089c.828-.546 1.386-.828 1.94-.955 1.106-.252 2.371.161 3.368 1.097 1.616 1.518 1.928 3.684.828 5.622l-6.136-5.764zM55.153 160.834c-1.084.928-2.458.954-4.028.05-2.223-1.281-2.924-3.156-2.104-5.624l9.157 5.274c.67-1.467.859-2.066.95-3.103.226-2.538-1.025-4.839-3.37-6.189-3.222-1.856-6.736-.775-8.374 2.557-1.586 3.227-.447 6.661 2.857 8.564 2.488 1.433 5 1.273 6.829-.425l-1.917-1.104zm-5.433-6.997c.693-.717 1.178-1.119 1.693-1.367 1.029-.497 2.36-.383 3.543.298 1.917 1.104 2.699 3.134 2.045 5.263l-7.28-4.194zM61.289 167.024l1.9.692 4.689-15.078-1.9-.692-4.69 15.078zM110.844 168.052l1.931-.867-2.251-5.878 4.226-1.898c2.811-1.262 3.614-1.856 4.172-3.091.554-1.181.569-2.716.044-4.086-.753-1.967-2.35-3.115-4.081-2.907-.844.094-1.642.374-3.616 1.261l-6.072 2.726 5.647 14.74zm-.981-8.469l-2.049-5.348 4.098-1.84c1.181-.53 1.819-.765 2.291-.847 1.212-.182 2.152.432 2.66 1.758.457 1.193.289 2.33-.416 2.984-.469.417-1.349.942-2.464 1.443l-4.12 1.85zM127.495 159.688l1.671-1.144-7.956-13.614-1.671 1.145 7.956 13.613zM142.405 145.144c-.189.215-.259.314-.344.396-.715.686-1.082.646-1.725-.14l-2.974-3.637c-1.286-1.571-1.905-1.956-2.985-1.865-1.031.076-2.262.799-3.777 2.252-2.621 2.513-3.14 4.739-1.661 7.103l1.549-1.485c-.878-1.408-.535-2.585 1.269-4.315 1.549-1.485 2.836-1.806 3.583-.893.524.64.388 1.292-.424 2.266a583.73 583.73 0 00-2.748 3.288c-1.484 2.01-1.652 3.735-.486 5.161 1.39 1.699 3.6 1.504 5.659-.471 1.668-1.6 2.401-3.378 2.144-5.251 1.003.929 1.954.866 3.009-.146.494-.474.634-.674.838-1.13l-.927-1.133zm-5.547-.876c.598.731 1.158 1.564 1.323 2.025.496 1.349-.245 3.561-1.642 4.899-1.174 1.127-2.568 1.354-3.24.532-.269-.329-.398-.858-.305-1.338.078-.499.348-.986 1.079-1.948 2.234-2.989 2.234-2.989 2.785-4.17zM136.891 136.702l12.227 2.657c1.032 1.785 1.08 2.425.23 3.676-.279.41-.488.635-.959.952l1.475 1.175c.453-.543.697-.86.962-1.251 1.142-1.681 1.247-2.923.363-4.59l-6.984-13.389-1.288 1.896 5.038 9.311-9.697-2.45-1.367 2.013zM156.241 119.662c2.418.766 4.346-.804 5.467-4.472 1.017-3.328.295-5.948-1.874-6.724-1.284-.46-2.339-.06-3.262 1.192-.55.758-.968 1.562-1.786 3.354-1.007 2.252-1.546 2.813-2.498 2.472-.974-.349-1.219-1.718-.658-3.552.311-1.019.802-1.823 1.423-2.328.462-.387.885-.487 1.664-.384l.581-1.902c-1.156-.313-1.859-.264-2.679.171-1.183.657-2.011 1.842-2.586 3.721-.484 1.585-.564 2.812-.286 3.992.278 1.179 1.131 2.163 2.194 2.543.995.357 1.973.13 2.766-.616.591-.567.91-1.131 1.834-3.111.734-1.596 1.152-2.401 1.409-2.761.451-.592.917-.752 1.492-.546 1.041.373 1.287 1.817.657 3.878-.429 1.404-1.098 2.47-1.758 2.861-.45.266-.83.306-1.484.197l-.616 2.015zM164.472 103.408l.195-2.028-5.951-.673c-.957-.108-1.599-.3-2.09-.594-1.134-.724-1.802-2.35-1.641-4.023.212-2.194 1.488-3.194 3.799-2.932l6.604.746.196-2.027-6.675-.755c-1.704-.192-2.224-.18-2.905.03-1.482.451-2.456 1.986-2.666 4.155-.207 2.147.397 3.716 1.947 5.012l-6.325-.716-.195 2.029 15.707 1.776zM153.146 79.716c.459 3.953 3.245 6.371 6.829 5.883 3.678-.5 5.854-3.545 5.393-7.522-.457-3.93-3.217-6.326-6.732-5.848-3.77.512-5.954 3.487-5.49 7.487zm1.694-.278c-.303-2.612 1.263-4.594 3.94-4.958 2.653-.361 4.574 1.123 4.88 3.758.15 1.294-.132 2.528-.804 3.456-.67.952-1.627 1.464-3.07 1.66-2.63.359-4.635-1.233-4.946-3.916zM152.701 70.755l9.066-8.67-.862-2.307-9.402.872 7.303-6.48-.862-2.305-12.151.426.854 2.283 9.531-.593-7.333 6.467.846 2.261 9.439-.837-7.258 6.667.829 2.216zM152.992 42.841l-1.11-1.73-4.613 3.469c-1.073.807-1.841 1.09-2.687.989-1.099-.147-2.018-.753-2.67-1.768-.242-.377-.383-.684-.608-1.252l-1.657 1.246c.167.434.276.648.481.966.574.895 1.361 1.512 2.239 1.706.639.169 1.276.162 2.435-.032l-2.165 1.628 1.11 1.73 9.245-6.952zM136.712 27.853c1.289-.59 2.607-.226 3.857 1.093 1.769 1.866 1.923 3.875.462 6.026l-7.289-7.687c-1.041 1.227-1.386 1.752-1.758 2.728-.913 2.387-.351 4.962 1.515 6.931 2.565 2.705 6.216 2.657 8.693-.098 2.399-2.666 2.256-6.305-.374-9.078-1.98-2.089-4.421-2.646-6.632-1.525l1.526 1.61zm3.261 8.295c-.857.496-1.431.747-1.99.84-1.118.189-2.357-.297-3.299-1.29-1.526-1.61-1.714-3.791-.506-5.662l5.795 6.112zM122.729 17.469c1.132-.864 2.502-.809 4.016.189 2.144 1.412 2.737 3.328 1.781 5.748l-8.829-5.816c-.748 1.427-.97 2.015-1.119 3.047-.368 2.524.749 4.899 3.011 6.388 3.107 2.047 6.669 1.174 8.487-2.062 1.76-3.133.818-6.634-2.367-8.732-2.399-1.58-4.911-1.57-6.829.02l1.849 1.218zm5.021 7.318c-.73.676-1.236 1.05-1.763 1.267-1.053.436-2.373.244-3.513-.507-1.849-1.218-2.514-3.294-1.744-5.385l7.02 4.625zM116.893 10.888l-1.854-.808-5.498 14.798 1.854.807 5.498-14.797z"
          ></path>
        </motion.svg>
        <svg className="play" xmlns="http://www.w3.org/2000/svg" width="45" height="55" fill="none" viewBox="0 0 45 55">
          <path stroke="#DD1717" strokeWidth="2" d="M1.391 52.75V2.194l41.61 24.342L1.39 52.75z"></path>
        </svg>
      </a>
    </div>
  )
}

export default HeroElements
