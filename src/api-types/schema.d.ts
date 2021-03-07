export interface Query {
  user: User | null
}

export interface User {
  id: number
  email: string | null
  firstName: string
  lastName: string
  age: number | null
  password: string | null
  verifiedEmail: boolean
  phoneNumber: string | null
  VerifiedPhoneNumber: boolean | null
  profilePhoto: string | null
  createdAt: string
  updatedAt: string | null
  fullName: string | null
  isDriving: boolean
  isRiding: boolean
  isTaken: boolean
  lastLat: number
  lastLng: number
  lastOrientation: number | null
  chat: Chat | null
  messages: Array<Message> | null
}

export interface Chat {
  id: number
  messages: Array<Message> | null
  participants: Array<User> | null
  createdAt: string
  updatedAt: string
}

export interface Message {
  id: number
  text: string
  chat: Chat
  user: User
  createdAt: string
  updatedAt: string
}

export interface Place {
  id: number
  name: string
  lat: number
  lng: number
  address: string
  isFav: boolean | null
  createdAt: string
  updatedAt: string
  status: string
  pickUpAddress: string
  pickUpLat: number
  pickUpLng: number
  dropOffAddress: string
  dropOffLat: number
  dropOffLng: number
  price: number
  distance: number
  duration: number
}

export interface Verification {
  id: number
  target: string
  payload: string
  key: string
  used: boolean
  createdAt: string
  updatedAt: string
}
