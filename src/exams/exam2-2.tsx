type samuraiType = {
  id: string
  name: string
  status: "online" | "offline"
}
type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
type CourseType = {
  name: CourseNameType
  mentor: string
  isDone: boolean
}
type TechnologiesType = {
  [userID: string]: Array<CourseType>
}

const samuraiID_1 = "64jf-87kg"
const samuraiID_2 = "90lg-34ks"
const samuraiID_3 = "12jm-05fd"

export const samurai: Array<samuraiType> = [
  {id: samuraiID_1, name: "Bob", status: "online"},
  {id: samuraiID_2, name: "Alex", status: "offline"},
  {id: samuraiID_3, name: "Ann", status: "offline"},
]

export const technologies: TechnologiesType = {
  [samuraiID_1]: [
    {name: "HTML", mentor: "Svetlana", isDone: true},
    {name: "JS", mentor: "Viktor", isDone: true},
    {name: "React", mentor: "Dmitrij", isDone: false},
    {name: "Redux", mentor: "Valera", isDone: false},
    {name: "HomeWorks", mentor: "Ignat", isDone: true},
  ],
  [samuraiID_2]: [
    {name: "HTML", mentor: "Svetlana", isDone: true},
    {name: "JS", mentor: "Viktor", isDone: true},
    {name: "React", mentor: "Dmitrij", isDone: true},
    {name: "Redux", mentor: "Valera", isDone: false},
    {name: "HomeWorks", mentor: "Ignat", isDone: true},
  ],
  [samuraiID_3]: [
    {name: "HTML", mentor: "Svetlana", isDone: true},
    {name: "JS", mentor: "Viktor", isDone: true},
    {name: "React", mentor: "Dmitrij", isDone: false},
    {name: "Redux", mentor: "Valera", isDone: false},
    {name: "HomeWorks", mentor: "Ignat", isDone: false},
  ],
}

export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
  return {...technologies,
    [samuraiID]: technologies[name].map(c => c.name === name ? {...c, isDone} : c)
  }
}


