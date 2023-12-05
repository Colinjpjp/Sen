const { stdin, stdout } = require('process')
const readline = require('readline')
const { custom } = require('format-logs')
const resultContainer = custom('** Tu resultado es : ', 'green')
const separator = custom('----------'.repeat(10), 'red')

const rl = readline.createInterface({ input: stdin, output: stdout })

class Angules {
  constructor() {}

  AnguloA(bDeg, cDeg) {
    console.log(`${resultContainer}${180 - bDeg - cDeg}`)
    // return 180 - bDeg - cDeg;
  }

  AnguloB(aDeg, cDeg) {
    console.log(`${resultContainer}${180 - aDeg - cDeg}`)
    // return 180 - aDeg - cDeg;
  }

  AnguloC(aDeg, bDeg) {
    console.log(`${resultContainer}${180 - aDeg - bDeg}`)
    // return 180 - aDeg - bDeg;
  }
}

class LawSen {
  constructor(nothing) {
    this.nothing = nothing
  }

  CalculateSideA(A, b, B) {
    A = (A * Math.PI) / 180
    B = (B * Math.PI) / 180
    console.log((b * Math.sin(A)) / Math.sin(B))
  }

  CalculateAnguleA(a, B, b) {
    B = (B * Math.PI) / 180
    let Result = (a * Math.sin(B)) / b
    Result = Math.asin(Result)
    console.log((Result * 180) / Math.PI)
  }

  CalculateSideB(a, A, B) {
    A = (A * Math.PI) / 180
    B = (B * Math.PI) / 180
    console.log((a * Math.sin(B)) / Math.sin(A))
  }

  CalculateAnguleB(b, A, a) {
    A = (A * Math.PI) / 180
    let Result = (b * Math.sin(A)) / a
    Result = Math.asin(Result)
    console.log((Result * 180) / Math.PI)
  }

  CalculateSideB2(c, B, C) {
    B = (B * Math.PI) / 180
    C = (C * Math.PI) / 180
    console.log((c * Math.sin(B)) / Math.sin(C))
  }

  CalculateAnguleB2(b, C, c) {
    C = (C * Math.PI) / 180
    let Result = (b * Math.sin(C)) / c
    Result = Math.asin(Result)
    console.log((Result * 180) / Math.PI)
  }

  CalculateSideC(b, C, B) {
    B = (B * Math.PI) / 180
    C = (C * Math.PI) / 180
    console.log((b * Math.sin(C)) / Math.sin(B))
  }

  CalculateAnguleC(B, c, b) {
    B = (B * Math.PI) / 180
    let Result = (c * Math.sin(B)) / b
    Result = Math.asin(Result)
    console.log((Result * 180) / Math.PI)
  }

  CalculateSideA2(A, c, C) {
    A = (A * Math.PI) / 180
    C = (C * Math.PI) / 180
    console.log((c * Math.sin(A)) / Math.sin(C))
  }

  CalculateAnguleA2(a, C, c) {
    C = (C * Math.PI) / 180
    let Result = (a * Math.sin(C)) / c
    Result = Math.asin(Result)
    console.log((Result * 180) / Math.PI)
  }

  CalculateSideC2(a, C, A) {
    C = (C * Math.PI) / 180
    A = (A * Math.PI) / 180
    console.log((a * Math.sin(C)) / Math.sin(A))
  }

  CalculateAnguleC2(A, c, a) {
    A = (A * Math.PI) / 180
    let Result = (c * Math.sin(A)) / a
    Result = Math.asin(Result)
    console.log((Result * 180) / Math.PI)
  }
}
const Sen = new LawSen('Nothing')
const LawOfInteriorAngles = new Angules()
let container1
let container2
let container3
const formulaSen = `${custom(
  '\nLey de seno : \n  \t a  \t b  \t c \n \t---- = ----  =  ---- \n \tSenA\tSenB\tSenC \n',
  'green'
)}`
const SenFormulaA = `${custom(
  'Ley de seno : \n  \t a  \t b\n \t----  = ---- \n \tSenA\tSenB\n\n',
  'red'
)}`

const SenFormulaA2 = `${custom(
  'Ley de seno : \n  \t a  \t c\n \t----  = ---- \n \tSenA\tSenC\n',
  'blue'
)}`

const SenFormulaB = `${custom(
  'Ley de seno : \n \t a \t b \n \t---- =  ---- \n \tSenA\tSenB\n\n',
  'red'
)}`

const SenFormulaB2 = `${custom(
  'Ley de seno : \n \t b \t c \n \t---- =  ---- \n \tSenB\tSenC\n\n',
  'blue'
)}`

const SenFormulaC = `${custom(
  'Ley de seno : \n \t b \t c \n \t---- =  ---- \n \tSenB\tSenC\n\n',
  'red'
)}`

const SenFormulaC2 = `${custom(
  'Ley de seno : \n \t a \t c \n \t---- =  ---- \n \tSenA\tSenC\n\n',
  'blue'
)}`

const exit = 'exit'

console.log(formulaSen)

function Angules180A() {
  rl.question(`${custom(' Valor de el angulo B : ', 'green')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.error(custom('Error (NaN)', 'red'))
      Angules180A()
      // console.log(separator);
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de C : ', 'green')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom('Error (NaN)', 'red'))
        Angules180A()
        // console.log(separator);
        return
      }
      container2 = answer2
      LawOfInteriorAngles.AnguloA(container1, container2)
      console.log(separator)
      container1 = undefined
      container2 = undefined
      main()
    })
  })
}

function Angules180B() {
  rl.question(`${custom(' Valor de el angulo A : ', 'green')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.error(custom('Error (NaN)', 'red'))
      Angules180B()
      // console.log(separator);
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de C : ', 'green')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom('Error (NaN)', 'red'))
        Angules180B()
        // console.log(separator);
        return
      }
      container2 = answer2
      LawOfInteriorAngles.AnguloB(container1, container2)
      console.log(separator)
      container1 = undefined
      container2 = undefined
      main()
    })
  })
}

function Angules180C() {
  rl.question(`${custom(' Valor de el angulo A : ', 'green')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.error(custom('Error (NaN)', 'red'))
      Angules180C()
      // console.log(separator);
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de B : ', 'green')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom('Error (NaN)', 'red'))
        Angules180C()
        // console.log(separator);
        return
      }
      container2 = answer2
      LawOfInteriorAngles.AnguloC(container1, container2)
      console.log(separator)
      container1 = undefined
      container2 = undefined
      main()
    })
  })
}

function Angules180() {
  rl.question(
    `${custom('¿ Que angulo quieres calcular  : \n', 'green')}${custom(
      ' 1.Angulo A \n',
      'cyan'
    )}${custom(' 2.Angulo B \n', 'blue')}${custom(' 3.Angulo C \n', 'yellow')}`,
    (answer) => {
      if (answer.trim() === '1') {
        Angules180A()
      } else if (answer.trim() === '2') {
        Angules180B()
      } else if (answer.trim() === '3') {
        Angules180C()
      } else if (answer.trim() === exit) {
        main()
      } else {
        Angules180()
      }
    }
  )
}
//
function AnguleSenA() {
  rl.question(
    `${custom(' ¿ Que formula vas a utilizar :  \n\n', 'red')}${
      '1)\t' + SenFormulaA
    }${'2)\t' + SenFormulaA2}`,
    (answer0) => {
      if (answer0.trim() === '1') {
        rl.question(`${custom(' Valor de lado a : ', 'yellow')}`, (answer1) => {
          answer1 = parseFloat(answer1)
          if (isNaN(answer1)) {
            console.log(custom(NaN, 'red'))
            AnguleSenA()
            return
          }
          container1 = answer1
          rl.question(
            `${custom(' Valor del angulo B :', 'green')}`,
            (answer2) => {
              answer2 = parseFloat(answer2)
              if (isNaN(answer2)) {
                console.log(custom(NaN, 'red'))
                AnguleSenA()
                return
              }
              container2 = answer2
              rl.question(
                `${custom(' Valor del lado b : ', 'cyan')}`,
                (answer3) => {
                  answer3 = parseFloat(answer3)
                  if (isNaN(answer3)) {
                    console.log(custom(NaN, 'red'))
                    AnguleSenA()
                    return
                  }
                  container3 = answer3
                  Sen.CalculateAnguleA(container1, container2, container3)
                  container1 = undefined
                  container2 = undefined
                  container3 = undefined
                  console.log(separator)
                  main()
                }
              )
            }
          )
        })
      } else if (answer0.trim() === '2') {
        rl.question(`${custom('Valor de lado a : ', 'yellow')}`, (answer1) => {
          answer1 = parseFloat(answer1)
          if (isNaN(answer1)) {
            console.log(custom(NaN, 'red'))
            AnguleSenA()
            return
          }
          container1 = answer1
          rl.question(
            `${custom('Valor del angulo C : ', 'green')}`,
            (answer2) => {
              answer2 = parseFloat(answer2)
              if (isNaN(answer2)) {
                console.log(custom(NaN, 'red'))
                AnguleSenA()
                return
              }
              container2 = answer2
              rl.question(
                `${custom('Valor del lado c :  ', 'cyan')}`,
                (answer3) => {
                  answer3 = parseFloat(answer3)
                  if (isNaN(answer3)) {
                    console.log(custom(NaN, 'red'))
                    AnguleSenA()
                    return
                  }
                  container3 = answer3
                  Sen.CalculateAnguleA2(container1, container2, container3),
                    (container1 = undefined)
                  container2 = undefined
                  container3 = undefined
                  console.log(separator)
                  main()
                }
              )
            }
          )
        })
      } else {
        main()
      }
    }
  )
}

function AnguleSenB() {
  rl.question(
    `${custom('Que formula vas a utilizar : \n \n')}${'1) \t ' + SenFormulaB}${
      '2) \t' + SenFormulaB2
    }`,
    (answer0) => {
      if (answer0.trim() === '1') {
        rl.question(`${custom(' Valor del lado b : ', 'red')}`, (answer1) => {
          answer1 = parseFloat(answer1)
          if (isNaN(answer1)) {
            console.log(custom(NaN, 'red'))
            AnguleSenB()
            return
          }
          container1 = answer1
          rl.question(
            `${custom(' Valor del Angulo A : ', 'yellow')}`,
            (answer2) => {
              answer2 = parseFloat(answer2)
              if (isNaN(answer2)) {
                console.log(custom(NaN, 'red'))
                AnguleSenB()
                return
              }
              container2 = answer2
              rl.question(
                `${custom(' Valor del lado a : ', 'cyan')}`,
                (answer3) => {
                  answer3 = parseFloat(answer3)
                  if (isNaN(answer3)) {
                    console.log(custom(NaN, 'red'))
                    AnguleSenB()
                    return
                  }
                  container3 = answer3
                  Sen.CalculateAnguleB(container1, container2, container3)
                  container1 = undefined
                  container2 = undefined
                  container3 = undefined
                  console.log(separator)
                  main()
                }
              )
            }
          )
        })
      } else if (answer0.trim() === '2') {
        rl.question(`${custom(' Valor del lado b : ', 'red')}`, (answer1) => {
          answer1 = parseFloat(answer1)
          if (isNaN(answer1)) {
            console.log(custom(NaN, 'red'))
            AnguleSenB()
            return
          }
          container1 = answer1
          rl.question(
            `${custom(' Valor del Angulo C : ', 'yellow')}`,
            (answer2) => {
              answer2 = parseFloat(answer2)
              if (isNaN(answer2)) {
                console.log(custom(NaN, 'red'))
                AnguleSenB()
                return
              }
              container2 = answer2
              rl.question(
                `${custom(' Valor del lado c : ', 'cyan')}`,
                (answer3) => {
                  answer3 = parseFloat(answer3)
                  if (isNaN(answer3)) {
                    console.log(custom(NaN, 'red'))
                    AnguleSenB()
                    return
                  }
                  container3 = answer3
                  Sen.CalculateAnguleB2(container1, container2, container3)
                  container1 = undefined
                  container2 = undefined
                  container3 = undefined
                  console.log(separator)
                  main()
                }
              )
            }
          )
        })
      }
    }
  )
}

function AnguleSenC() {
  rl.question(
    `${custom(' Que formula vas a utilizar : \n\n')}${'1)\t' + SenFormulaC}${
      '2)\t' + SenFormulaC2
    }`,
    (answer0) => {
      if (answer0.trim() === '1') {
        rl.question(`${custom(' Valor del angulo B : ', 'red')}`, (answer1) => {
          answer1 = parseFloat(answer1)
          if (isNaN(answer1)) {
            console.log(custom(NaN, 'red'))
            AnguleSenC()
            return
          }
          container1 = answer1
          rl.question(
            `${custom(' Valor del lado c : ', 'cyan')}`,
            (answer2) => {
              answer2 = parseFloat(answer2)
              if (isNaN(answer2)) {
                console.log(custom(NaN, 'red'))
                AnguleSenC()
                return
              }
              container2 = answer2
              rl.question(
                `${custom(' Valor del lado b : ', 'yellow')}`,
                (answer3) => {
                  answer3 = parseFloat(answer3)
                  if (isNaN(answer3)) {
                    console.log(custom(NaN, 'red'))
                    AnguleSenC()
                    return
                  }
                  container3 = answer3
                  Sen.CalculateAnguleC(container1, container2, container3)
                  container1 = undefined
                  container2 = undefined
                  container3 = undefined
                  console.log(separator)
                  main()
                }
              )
            }
          )
        })
      } else if (answer0.trim() === '2') {
        rl.question(
          `${custom(' Valor del Angulo A : ', 'yellow')}`,
          (answer1) => {
            answer1 = parseFloat(answer1)
            if (isNaN(answer1)) {
              console.log(custom(NaN, 'red'))
              AnguleSenC()
              return
            }
            container1 = answer1
            rl.question(
              `${custom(' Valor del lado c : ', 'cyan')}`,
              (answer2) => {
                answer2 = parseFloat(answer2)
                if (isNaN(answer2)) {
                  console.log(custom(NaN, 'red'))
                  AnguleSenC()
                  return
                }
                container2 = answer2
                rl.question(
                  `${custom(' Valor del lado a : ', 'blue')}`,
                  (answer3) => {
                    answer3 = parseFloat(answer3)
                    if (isNaN(answer3)) {
                      console.log(custom(NaN, 'red'))
                      AnguleSenC()
                      return
                    }
                    container3 = answer3
                    Sen.CalculateAnguleC2(container1, container2, container3)
                    container1 = undefined
                    container2 = undefined
                    container3 = undefined
                    console.log(separator)
                    main()
                  }
                )
              }
            )
          }
        )
      } else if (answer0.trim() === exit) {
        rl.close()
      } else {
        AnguleSenC()
      }
    }
  )
}

function AnguleSen() {
  rl.question(
    `${custom(' ¿ Que angulo quieres calcular : \n', 'green')}${custom(
      ' 1.A \n',
      'red'
    )}${custom(' 2.B \n', 'cyan')}${custom(' 3.C \n', 'blue')}`,
    (answer) => {
      if (answer.trim() === '1') {
        AnguleSenA()
      } else if (answer.trim() === '2') {
        AnguleSenB()
      } else if (answer.trim() === '3') {
        AnguleSenC()
      } else if (answer.trim() === exit) {
        main()
      } else {
        AnguleSen()
      }
    }
  )
}

function calculateSideSenA1() {
  rl.question(`${custom(' Valor del Angulo A : ', 'blue')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.log(custom(NaN, 'red'))
      calculateSideSenA1()
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de lado b : ', 'red')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom(NaN, 'red'))
        calculateSideSenA1()
        return
      }
      container2 = answer2
      rl.question(`${custom(' Valor del angulo B : ', 'cyan')}`, (answer3) => {
        answer3 = parseFloat(answer3)
        if (isNaN(answer3)) {
          console.log(custom(NaN, 'red'))
          calculateSideSenA1()
          return
        }
        container3 = answer3
        Sen.CalculateSideA(container1, container2, container3)
        main()
      })
    })
  })
}

function calculateSideSenA2() {
  rl.question(`${custom(' Valor del Angulo A : ', 'blue')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.log(custom(NaN, 'red'))
      calculateSideSenA2()
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de lado c : ', 'red')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom(NaN, 'red'))
        calculateSideSenA2()
        return
      }
      container2 = answer2
      rl.question(`${custom(' Valor del angulo C : ', 'cyan')}`, (answer3) => {
        answer3 = parseFloat(answer3)
        if (isNaN(answer3)) {
          console.log(custom(NaN, 'red'))
          calculateSideSenA2()
          return
        }
        container3 = answer3
        Sen.CalculateSideA(container1, container2, container3)
        main()
      })
    })
  })
}

function sideSenA() {
  rl.question(
    `${custom(' Que formula vas  a  utilizar ? : \n\n', 'cyan')}${
      '1) \t' + SenFormulaA
    }${'2) \t' + SenFormulaA2}`,
    (answer) => {
      if (answer.trim() === '1') {
        calculateSideSenA1()
      } else if (answer.trim() === '2') {
        calculateSideSenA2()
      } else if (answer.trim() === exit) {
        main()
      } else {
        sideSenA()
      }
    }
  )
}

function calculateSideSenB1() {
  rl.question(`${custom(' Valor del lado a : ', 'blue')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.log(custom(NaN, 'red'))
      calculateSideSenB1()
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de angulo A : ', 'red')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom(NaN, 'red'))
        calculateSideSenB1()
        return
      }
      container2 = answer2
      rl.question(`${custom(' Valor del angulo B : ', 'cyan')}`, (answer3) => {
        answer3 = parseFloat(answer3)
        if (isNaN(answer3)) {
          console.log(custom(NaN, 'red'))
          calculateSideSenB1()
          return
        }
        container3 = answer3
        Sen.CalculateSideB(container1, container2, container3)
        main()
      })
    })
  })
}

function calculateSideSenB2() {
  rl.question(`${custom(' Valor del lado c  : ', 'blue')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.log(custom(NaN, 'red'))
      calculateSideSenB2()
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de angulo B : ', 'red')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom(NaN, 'red'))
        calculateSideSenB2()
        return
      }
      container2 = answer2
      rl.question(`${custom(' Valor del angulo C : ', 'cyan')}`, (answer3) => {
        answer3 = parseFloat(answer3)
        if (isNaN(answer3)) {
          console.log(custom(NaN, 'red'))
          calculateSideSenB2()
          return
        }
        container3 = answer3
        Sen.CalculateSideB2(container1, container2, container3)
        main()
      })
    })
  })
}

function sideSenB() {
  rl.question(
    `${custom(' Que formula vas  a  utilizar ? : \n\n', 'cyan')}${
      '1) \t' + SenFormulaB
    }${'2) \t' + SenFormulaB2}`,
    (answer) => {
      if (answer.trim() === '1') {
        calculateSideSenB1()
      } else if (answer.trim() === '2') {
        calculateSideSenB2()
      } else if (answer.trim() === exit) {
        main()
      } else {
        sideSenB()
      }
    }
  )
}

function calculateSideSenC1() {
  rl.question(`${custom(' Valor del lado b  : ', 'blue')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.log(custom(NaN, 'red'))
      calculateSideSenC1()
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de angulo C : ', 'red')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom(NaN, 'red'))
        calculateSideSenC1()
        return
      }
      container2 = answer2
      rl.question(`${custom(' Valor del angulo B : ', 'cyan')}`, (answer3) => {
        answer3 = parseFloat(answer3)
        if (isNaN(answer3)) {
          console.log(custom(NaN, 'red'))
          calculateSideSenC1()
          return
        }
        container3 = answer3
        Sen.CalculateSideC(container1, container2, container3)
        main()
      })
    })
  })
}

function calculateSideSenC2() {
  rl.question(`${custom(' Valor del lado a  : ', 'blue')}`, (answer1) => {
    answer1 = parseFloat(answer1)
    if (isNaN(answer1)) {
      console.log(custom(NaN, 'red'))
      calculateSideSenC2()
      return
    }
    container1 = answer1
    rl.question(`${custom(' Valor de angulo C : ', 'red')}`, (answer2) => {
      answer2 = parseFloat(answer2)
      if (isNaN(answer2)) {
        console.log(custom(NaN, 'red'))
        calculateSideSenC2()
        return
      }
      container2 = answer2
      rl.question(`${custom(' Valor del angulo A : ', 'cyan')}`, (answer3) => {
        answer3 = parseFloat(answer3)
        if (isNaN(answer3)) {
          console.log(custom(NaN, 'red'))
          calculateSideSenC2()
          return
        }
        container3 = answer3
        Sen.CalculateSideC2(container1, container2, container3)
        main()
      })
    })
  })
}

function sideSenC() {
  rl.question(
    `${custom(' Que formula vas  a  utilizar ? : \n\n', 'cyan')}${
      '1) \t' + SenFormulaC
    }${'2) \t' + SenFormulaC2}`,
    (answer) => {
      if (answer.trim() === '1') {
        calculateSideSenC1()
      } else if (answer.trim() === '2') {
        calculateSideSenC2()
      } else if (answer.trim() === exit) {
        main()
      } else {
        sideSenC()
      }
    }
  )
}

function sideSen() {
  rl.question(
    `${custom(' Que lado quieres calcular : \n \n', 'yellow')}${custom(
      ' 1.a \n',
      'red'
    )}${custom(' 2.b \n', 'cyan')}${custom(' 3.c \n', 'green')}`,
    (answer) => {
      if (answer.trim() === '1') {
        sideSenA()
      } else if (answer.trim() === '2') {
        sideSenB()
      } else if (answer.trim() === '3') {
        sideSenC()
      } else if (answer.trim() === exit) {
        main()
      } else {
        sideSen()
      }
    }
  )
}

function main() {
  rl.question(
    `${custom(' ¿ Que quieres hacer ? : \n\n', 'cyan')}${custom(
      ' 1. Calcular un angulo mediante la ley de los ángulos internos(Adeg+Bdeg+Cdeg = 180deg). \n',
      'yellow'
    )}${custom(
      ' 2. Calcular un angulo usando la ley de seno. \n',
      'cyan'
    )}${custom(
      ' 3. Calcular un lado usando la ley de seno. \n ',
      'green'
    )}${custom('4. Cerrar la app. \n', 'red')}`,
    (answer) => {
      if (answer.trim() === '1') {
        Angules180()
      } else if (answer.trim() === '2') {
        AnguleSen()
      } else if (answer.trim() === '3') {
        sideSen()
      } else if (answer.trim() === '4' || answer.trim() === exit) {
        rl.close()
      } else {
        main()
      }
    }
  )
}

main()
