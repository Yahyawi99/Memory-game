/* ***************** */
// Variables
/* ***************** */
const Icons = [
  {
    src: `<svg data-id="atom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116 27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75 369.65538,208.25Z" /></svg>`,
  },
  {
    src: '<svg data-id="bahai" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496.25 202.52l-110-15.44 41.82-104.34c6.67-16.64-11.6-32.18-26.59-22.63L307.44 120 273.35 12.82C270.64 4.27 263.32 0 256 0c-7.32 0-14.64 4.27-17.35 12.82l-34.09 107.19-94.04-59.89c-14.99-9.55-33.25 5.99-26.59 22.63l41.82 104.34-110 15.43c-17.54 2.46-21.68 26.27-6.03 34.67l98.16 52.66-74.48 83.54c-10.92 12.25-1.72 30.93 13.29 30.93 1.31 0 2.67-.14 4.07-.45l108.57-23.65-4.11 112.55c-.43 11.65 8.87 19.22 18.41 19.22 5.15 0 10.39-2.21 14.2-7.18l68.18-88.9 68.18 88.9c3.81 4.97 9.04 7.18 14.2 7.18 9.54 0 18.84-7.57 18.41-19.22l-4.11-112.55 108.57 23.65c17.36 3.76 29.21-17.2 17.35-30.49l-74.48-83.54 98.16-52.66c15.64-8.39 11.5-32.2-6.04-34.66zM338.51 311.68l-51.89-11.3 1.97 53.79L256 311.68l-32.59 42.49 1.96-53.79-51.89 11.3 35.6-39.93-46.92-25.17 52.57-7.38-19.99-49.87 44.95 28.62L256 166.72l16.29 51.23 44.95-28.62-19.99 49.87 52.57 7.38-46.92 25.17 35.61 39.93z"/></svg>',
  },
  {
    src: '<svg data-id="bell" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/></svg>',
  },
  {
    src: '<svg data-id="bomb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M440.5 88.5l-52 52L415 167c9.4 9.4 9.4 24.6 0 33.9l-17.4 17.4c11.8 26.1 18.4 55.1 18.4 85.6 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c30.5 0 59.5 6.6 85.6 18.4L311 97c9.4-9.4 24.6-9.4 33.9 0l26.5 26.5 52-52 17.1 17zM500 60h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12h24c6.6 0 12-5.4 12-12s-5.4-12-12-12zM440 0c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12zm33.9 55l17-17c4.7-4.7 4.7-12.3 0-17-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17 4.8 4.7 12.4 4.7 17 0zm-67.8 0c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17zm67.8 34c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17zM112 272c0-35.3 28.7-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16c-52.9 0-96 43.1-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16z"/></svg>',
  },
  {
    src: '<svg data-id="bookmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/></svg>',
  },
  {
    src: '<svg data-id="brain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"/></svg>',
  },
  {
    src: '<svg data-id="bug" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"/></svg>',
  },
  {
    src: '<svg data-id="car" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"/></svg>',
  },
  {
    src: '<svg data-id="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"/></svg>',
  },
  {
    src: '<svg data-id="code-branch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"/></svg>',
  },
  {
    src: '<svg data-id="coffee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"/></svg>',
  },
  {
    src: '<svg data-id="dice-five" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/></svg>',
  },
  {
    src: '<svg data-id="dragon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"/></svg>',
  },
  {
    src: '<svg data-id="fire-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"/></svg>',
  },
  {
    src: '<svg data-id="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"/></svg>',
  },
  {
    src: '<svg data-id="lemon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M489.038 22.963C465.944-.13 434.648-5.93 413.947 6.129c-58.906 34.312-181.25-53.077-321.073 86.746S40.441 355.041 6.129 413.945c-12.059 20.702-6.26 51.999 16.833 75.093 23.095 23.095 54.392 28.891 75.095 16.832 58.901-34.31 181.246 53.079 321.068-86.743S471.56 156.96 505.871 98.056c12.059-20.702 6.261-51.999-16.833-75.093zM243.881 95.522c-58.189 14.547-133.808 90.155-148.358 148.358-1.817 7.27-8.342 12.124-15.511 12.124-1.284 0-2.59-.156-3.893-.481-8.572-2.144-13.784-10.83-11.642-19.403C81.901 166.427 166.316 81.93 236.119 64.478c8.575-2.143 17.261 3.069 19.403 11.642s-3.069 17.259-11.641 19.402z"/></svg>',
  },
  {
    src: '<svg data-id=meteor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.328,20.8027c-11.60759,38.70264-34.30724,111.70173-61.30311,187.70077,6.99893,2.09372,13.4042,4,18.60653,5.59368a16.06158,16.06158,0,0,1,9.49854,22.906c-22.106,42.29635-82.69047,152.795-142.47819,214.40356-.99984,1.09373-1.99969,2.5-2.99954,3.49995A194.83046,194.83046,0,1,1,57.085,179.41009c.99985-1,2.40588-2,3.49947-3,61.59994-59.90549,171.97367-120.40473,214.37343-142.4982a16.058,16.058,0,0,1,22.90274,9.49988c1.59351,5.09368,3.49947,11.5936,5.5929,18.59351C379.34818,35.00565,452.43074,12.30281,491.12794.70921A16.18325,16.18325,0,0,1,511.328,20.8027ZM319.951,320.00207A127.98041,127.98041,0,1,0,191.97061,448.00046,127.97573,127.97573,0,0,0,319.951,320.00207Zm-127.98041-31.9996a31.9951,31.9951,0,1,1-31.9951-31.9996A31.959,31.959,0,0,1,191.97061,288.00247Zm31.9951,79.999a15.99755,15.99755,0,1,1-15.99755-15.9998A16.04975,16.04975,0,0,1,223.96571,368.00147Z"/></svg>',
  },
  {
    src: '<svg data-id="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"/></svg>',
  },
];
const All_Btns = document.querySelectorAll(".btn");
const Start_Btn = document.querySelector("#start");

const PlayGround = document.querySelector(".playground");
const Grid = document.querySelector(".grid");

const Score = document.querySelector(".score");
const Turns = document.querySelector(".turns");

const Btns = document.querySelector(".btns");

/* ***************** */
// Events
/* ***************** */
All_Btns.forEach((btn) => {
  btn.addEventListener("click", clickedBtnFunc);
});

Start_Btn.addEventListener("click", stratTheGame);

Btns.addEventListener("click", headerButtons);

/* ***************** */
// Functions
/* ***************** */
// Delay function
function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

// **********************************
// clicked button
function clickedBtnFunc(event) {
  let myChoice = event.target;
  let myContainer = event.currentTarget;

  if (myChoice !== myContainer) {
    [...myContainer.children].forEach((btn) => {
      btn.classList.remove("clicked");
    });
    myChoice.classList.add("clicked");
  }
}

// ******************************
// Clicked Icon
let ids = [];
async function clickedIcon(e) {
  let myIcon = e.currentTarget;

  myIcon.classList.add("icon-clicked");
  ids.push(myIcon.children[0]);

  if (ids.length === 2) {
    if (ids[0].dataset.id === ids[1].dataset.id) {
      await wait(500);
      ids.forEach((e) => {
        e.parentElement.classList.add("found-match");
      });

      if (Score.style.display === "none") {
        multiplePlayerScore();
        multiplePlayerTurn();
      } else {
        soloPlayerScore();
      }
    } else {
      await wait(750);
      ids.forEach((e) => {
        e.parentElement.classList.remove("icon-clicked");
      });

      if (Score.style.display === "none") {
        multiplePlayerTurn();
      } else {
        soloPlayerScore();
      }
    }
    ids = [];
  }
}

// ****************************
// Start The Game
function stratTheGame() {
  let mybtns = [];
  let clickedBtns;

  All_Btns.forEach((container) => {
    [...container.children].forEach((e) => {
      mybtns.push(e);
    });
  });

  clickedBtns = mybtns.filter((btn) => btn.classList.contains("clicked"));

  if (clickedBtns.length === 3 && !Grid.children.length) {
    PlayGround.classList.add("game-started");

    playground(clickedBtns);
  }
}

// ***********************
// Playground
function playground(myArr) {
  let keysName = ["theme", "players", "size"];
  let myData = {};

  myArr.forEach((btn, i) => {
    myData[keysName[i]] = btn.dataset.id;
  });

  gridSize(myData);
  themes(myData);
  players(myData);

  const myIcons = document.querySelectorAll(".icon");

  myIcons.forEach((icon) => {
    icon.addEventListener("click", clickedIcon);
  });
}

function themes(data) {
  if (data.theme === "icons") {
    let arr = [];
    while (Grid.children.length < data.size) {
      let rndm = Math.floor(Math.random() * Icons.length);
      if (!arr.includes(Icons[rndm])) {
        arr.push(Icons[rndm]);
        Grid.innerHTML += `<div class="icon">${Icons[rndm].src}</div><div class="icon">${Icons[rndm].src}</div>`;
      }
    }
  } else {
    let arr = [];
    while (Grid.children.length < data.size) {
      let rndm = Math.floor(Math.random() * data.size);
      if (!arr.includes(rndm)) {
        arr.push(rndm);
        Grid.innerHTML += `<div class="icon"><span data-id="${rndm}">${rndm}</span></div><div class="icon"><span data-id="${rndm}">${rndm}</span></div>`;
      }
    }
  }
  makeItRandom();
}

function makeItRandom() {
  let myRandomArr = [];

  while (myRandomArr.length < [...Grid.children].length) {
    let rndm = Math.floor(Math.random() * [...Grid.children].length);
    if (!myRandomArr.includes([...Grid.children][rndm])) {
      myRandomArr.push([...Grid.children][rndm]);
    }
  }

  Grid.innerHTML = "";

  for (let i = 0; i < myRandomArr.length; i++) {
    Grid.innerHTML += myRandomArr[i].outerHTML;
  }
}

function players(data) {
  if (data.players === "1") {
    Score.style.display = "flex";
    Turns.style.display = "none";

    window.requestAnimationFrame(soloPlayer);
  } else {
    Score.style.display = "none";
    Turns.style.display = "flex";

    for (let i = 0; i < data.players; i++) {
      Turns.innerHTML += `
      <div data-win="Player_${i + 1}" class="player">
      <p class="name">Player ${1 + i}</p>
      <p id="nums">0</p>
      <span class="msg">CURRENT TURN</span>
      <div class="rectangle"></div>
      </div>`;
    }

    multiplePlayerTurn();
  }
}

function gridSize(data) {
  let subtractor;

  switch (data.size) {
    case "16":
      subtractor = 4;
      break;
    case "36":
      subtractor = 6;
      break;
  }

  Grid.style.gridTemplateColumns = `repeat(${data.size / subtractor}, 75px)`;

  switch (subtractor) {
    case 6:
      Grid.style.marginTop = "25px";
      Grid.style.marginBottom = "0px";
      break;
    case 4:
      Grid.style.marginTop = "75px";
      Grid.style.marginBottom = "50px";
      break;
  }
}

// *****************************
// Increment the score

// for multiple players
let turn = 0;
function multiplePlayerTurn() {
  const All_Players = document.querySelectorAll(".player");

  let length = All_Players.length;

  All_Players.forEach((e) => {
    e.classList.remove("player-on");
  });

  if (turn < length) {
    All_Players[turn].classList.add("player-on");
    turn++;
  } else {
    turn = 0;
    All_Players[turn].classList.add("player-on");
    turn++;
  }

  let condition = [...Grid.children].every((icon) =>
    icon.classList.contains("found-match")
  );
  if (condition) {
    All_Players.forEach((e) => {
      e.classList.remove("player-on");
    });
    return "out";
  }
}

function multiplePlayerScore() {
  const All_Players = document.querySelectorAll(".player");

  All_Players.forEach((player) => {
    if (player.classList.contains("player-on")) {
      player.children[1].textContent++;
    }
  });

  let condition = [...Grid.children].every((icon) =>
    icon.classList.contains("found-match")
  );

  if (condition) {
    let checkForDraw;

    checkForDraw = [...All_Players].reduce((arr, player) => {
      if (!arr.includes(player.children[1].textContent)) {
        arr.push(player.children[1].textContent);
      }
      return arr;
    }, []);

    if (checkForDraw.length > 1) {
      styleWinnerCard();
    }
  }
}

function styleWinnerCard() {
  const All_Players = document.querySelectorAll(".player");
  const final_Score = {};
  let WINNER;

  All_Players.forEach((player, i) => {
    final_Score[`Player_${i + 1}`] = player.children[1].textContent;
  });
  WINNER = Object.keys(final_Score).sort((a, b) => {
    return final_Score[a] - final_Score[b];
  });
  WINNER = WINNER[WINNER.length - 1];

  All_Players.forEach((player) => {
    if (player.dataset.win === WINNER) {
      player.classList.add("winner");
      player.children[2].textContent = "Winner!!";
    }
  });
}

// for solo player
async function soloPlayer() {
  const Minutes = document.querySelector(".minutes");
  const Seconds = document.querySelector(".seconds");

  function format(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  }

  Seconds.textContent++;
  let seconds = format(Seconds.textContent);
  Seconds.textContent = seconds;

  if (Seconds.textContent >= 59) {
    Seconds.textContent = "00";
    Minutes.textContent++;
    let minutes = format(Minutes.textContent++);
    Minutes.textContent = minutes;
  }

  let condition = [...Grid.children].every((icon) =>
    icon.classList.contains("found-match")
  );

  if (!condition) {
    await wait(1000);

    requestAnimationFrame(soloPlayer);
  }
}

function soloPlayerScore() {
  const My_Score = document.querySelector(".moves-num");

  My_Score.textContent++;
}

// ***********************
// Reset & New game buttons
function headerButtons(event) {
  let myId = event.target.dataset.id;

  if (myId === "restart") {
    restartGame();
  }
  if (myId === "new game") {
    newGame();
  }
}

function newGame() {
  const All_Players = document.querySelectorAll(".player");
  const My_Score = document.querySelector(".moves-num");
  const Minutes = document.querySelector(".minutes");
  const Seconds = document.querySelector(".seconds");

  Grid.innerHTML = "";
  PlayGround.classList.remove("game-started");
  All_Btns.forEach((btn) => {
    btn.classList.remove("clicked");
  });

  // solo player
  if (Score.style.display === "flex") {
    My_Score.textContent = 0;
    Minutes.textContent = "00";
    Seconds.textContent = "-01";
    window.cancelAnimationFrame(soloPlayer);
  } else {
    // Multiple players
    Turns.innerHTML = "";
    All_Players.forEach((player) => {
      player.classList.remove("player-on");
      player.classList.remove("winner");
      player.children[1].textContent = 0;
      player.children[2].textContent = "Current Turn";
    });
    turn = 0;
  }
}

async function restartGame() {
  const All_Players = document.querySelectorAll(".player");
  const My_Score = document.querySelector(".moves-num");
  const Minutes = document.querySelector(".minutes");
  const Seconds = document.querySelector(".seconds");

  [...Grid.children].forEach((icon) => {
    icon.classList.remove("icon-clicked");
    icon.classList.remove("found-match");
  });
  let resetedGrid = [...Grid.children].sort(() => Math.random() * 2 - 1);
  Grid.innerHTML = "";
  for (let j = 0; j < resetedGrid.length; j++) {
    Grid.innerHTML += resetedGrid[j].outerHTML;
  }
  const myIcons = document.querySelectorAll(".icon");
  myIcons.forEach((icon) => {
    icon.addEventListener("click", clickedIcon);
  });
  ids = [];

  // Solo player
  if (Score.style.display === "flex") {
    My_Score.textContent = 0;
    Minutes.textContent = "00";
    Seconds.textContent = "00";

    cancelAnimationFrame();
    requestAnimationFrame(soloPlayer);
  } else {
    // Multiple player
    turn = 1;
    All_Players.forEach((player) => {
      player.classList.remove("player-on");
      player.classList.remove("winner");
      player.children[1].textContent = 0;
      player.children[2].textContent = "Current Turn";
    });
    All_Players[0].classList.add("player-on");
  }
}
