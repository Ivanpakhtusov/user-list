export interface User {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    phone: string;
  }
  
  const users: User[] = [
    {
      id: 1,
      firstName: "Иван",
      lastName: "Иванов",
      middleName: "Иванович",
      email: "ivanov@ivan.ivan",
      phone: "+70000000000",
    },
    {
      id: 2,
      firstName: "Петр",
      lastName: "Петров",
      middleName: "Петрович",
      email: "petrov@petr.petr",
      phone: "+70000000001",
    },
    {
      id: 3,
      firstName: "Сергей",
      lastName: "Сидоров",
      middleName: "Сергеевич",
      email: "sidorov@sidor.sidor",
      phone: "+70000000002",
    },
  ];
  
  export default users;
  
  