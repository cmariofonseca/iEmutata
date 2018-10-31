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
  subjects: Subject[];
}

interface Subject {
  name: string;
  periods: Period[];
}

interface Period {
  name: string;
  notes: number[];
}


