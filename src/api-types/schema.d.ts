export interface Query {
  sayBye: string
  sayHello: string
  user: User | null
}

export interface SayHelloQueryArgs {
  name: string
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
