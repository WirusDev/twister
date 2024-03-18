const reply = {
    eng: {
        leftHand: {
            red: "Left hand on red",
            blue: "Left hand on blue",
            yellow: "Left hand on yellow",
            green: "Left hand on green"
        },
        rightHand: {
            red: "Right hand on red",
            blue: "Right hand on blue",
            yellow: "Right hand on yellow",
            green: "Right hand on green"
        },
        leftFoot: {
            red: "Left foot on red",
            blue: "Left foot on blue",
            yellow: "Left foot on yellow",
            green: "Left foot on green"
        },
        rightFoot: {
            red: "Right foot on red",
            blue: "Right foot on blue",
            yellow: "Right foot on yellow",
            green: "Right foot on green"
        }
    },
    rus: {
        leftHand: {
            red: "Левая рука на красный",
            blue: "Левая рука на синий",
            yellow: "Левая рука на желтый",
            green: "Левая рука на зеленый"
        },
        rightHand: {
            red: "Правая рука на красный",
            blue: "Правая рука на синий",
            yellow: "Правая рука на желтый",
            green: "Правая рука на зеленый"
        },
        leftFoot: {
            red: "Левая нога на красный",
            blue: "Левая нога на синий",
            yellow: "Левая нога на желтый",
            green: "Левая нога на зеленый"
        },
        rightFoot: {
            red: "Правая нога на красный",
            blue: "Правая нога на синий",
            yellow: "Правая нога на желтый",
            green: "Правая нога на зеленый"
        }
    },
    ger: {
        leftHand: {
            red: "Linke Hand auf rot",
            blue: "Linke Hand auf blau",
            yellow: "Linke Hand auf gelb",
            green: "Linke Hand auf grün"
        },
        rightHand: {
            red: "Rechte Hand auf rot",
            blue: "Rechte Hand auf blau",
            yellow: "Rechte Hand auf gelb",
            green: "Rechte Hand auf grün"
        },
        leftFoot: {
            red: "Linker Fuß auf rot",
            blue: "Linker Fuß auf blau",
            yellow: "Linker Fuß auf gelb",
            green: "Linker Fuß auf grün"
        },
        rightFoot: {
            red: "Rechter Fuß auf rot",
            blue: "Rechter Fuß auf blau",
            yellow: "Rechter Fuß auf gelb",
            green: "Rechter Fuß auf grün"
        }
    }
}

export type Limb = 'leftHand' | 'rightHand' | 'leftFoot' | 'rightFoot';
export type Color = 'red' | 'blue' | 'yellow' | 'green';
export type Language = 'eng' | 'rus' | 'ger';

function replyInLanguage(language: Language, limb: Limb, color: Color): string {
    return reply[language][limb][color];
}

export {replyInLanguage};