export interface User {
  name: string;
  phone: number;
  userID: string;
  lastName: string;
  typeUser: string;
  studentDoc: string;
}

export interface Student {
  name: string;
  phone: number;
  userID: string;
  lastName: string;
  studentDoc: string;
  subjects?: Subject[];
}

export interface Subject {
  name: string;
  periods: Period[];
}

export interface Period {
  name: string;
  notes: number[];
}


