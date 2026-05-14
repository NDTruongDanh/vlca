export type Coordinate = {
  lat: number
  lng: number
}

export type Vehicle = {
  id: string
  name: string
  currentPosition: Coordinate
  destination: Coordinate
  history: Coordinate[]
}
