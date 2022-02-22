
export interface Skill {
  name: string
  since: Date
}

export interface User {
  id: number
  name: string
  email: string
  slackUser: string
  currentProject: string
  photoUrl: string
  birthDate: Date
  startDate: string
  isMentor: boolean
  title: string
  location: {
    state: string
    country: string
  }
  skills: Array<{
    name: string
    since: string
  }>
}

export interface PostInterface {
  id: number
  isArticle: boolean
  data: {
    title: string
    text: string
    image: string
  }
  postedBy: {
    id: number
    name: string
    title: string
    photoUrl: string | null
  }
  createdAt: string
}
