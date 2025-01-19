export interface Showroomtype {
  id: number
  name: string
  region: string
  province: string
  address: string
  phone: string
  mapLink: string
}

export enum Regions {
  HaNoi = 'Hà Nội',
  HoChiMinh = 'Hồ Chí Minh',
  MienBac = 'Miền Bắc',
  MienTrung = 'Miền Trung',
  MienNam = 'Miền Nam'
}
