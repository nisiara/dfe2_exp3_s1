import { http, HttpResponse, delay } from "msw";

const pacientes = [
  {
    numeroPaciente: "P001",
    nombrePaciente: "Ana García",
    edad: 45,
    atenciones: [
      /* {
        fecha: "2025-10-01",
        nombreMedico: "Dr. Carlos Ruiz",
        tipoAtencion: "urgencia",
        especialidad: "Traumatología",
      }, */
      {
        fecha: "2025-10-05",
        nombreMedico: "Dra. Elena Soto",
        tipoAtencion: "seguimiento",
        especialidad: "Traumatología",
      },
    ],
    costo: 350.50,
  },
  {
    numeroPaciente: "P002",
    nombrePaciente: "Luis Pérez",
    edad: 32,
    atenciones: [
      {
        fecha: "2025-09-28",
        nombreMedico: "Dra. Elena Soto",
        tipoAtencion: "consulta",
        especialidad: "Medicina General",
      },
    ],
    costo: 85.00,
  },
  {
    numeroPaciente: "P003",
    nombrePaciente: "Marta López",
    edad: 61,
    atenciones: [
      /* {
        fecha: "2025-10-10",
        nombreMedico: "Dr. Carlos Ruiz",
        tipoAtencion: "urgencia",
        especialidad: "Cardiología",
      },
      {
        fecha: "2025-10-15",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "seguimiento",
        especialidad: "Cardiología",
      }, */
      {
        fecha: "2025-10-20",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "seguimiento",
        especialidad: "Cardiología",
      },
    ],
    costo: 620.75,
  },
  {
    numeroPaciente: "P004",
    nombrePaciente: "Javier Díaz",
    edad: 28,
    atenciones: [
      /* {
        fecha: "2025-10-02",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "consulta",
        especialidad: "Psiquiatría",
      }, */
      {
        fecha: "2025-10-16",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "seguimiento",
        especialidad: "Psiquiatría",
      },
    ],
    costo: 170.00,
  },
  {
    numeroPaciente: "P005",
    nombrePaciente: "Carmen Flores",
    edad: 50,
    atenciones: [
      {
        fecha: "2025-09-15",
        nombreMedico: "Dr. Carlos Ruiz",
        tipoAtencion: "consulta",
        especialidad: "Oftalmología",
      },
    ],
    costo: 85.00,
  },
  {
    numeroPaciente: "P006",
    nombrePaciente: "Ricardo Gómez",
    edad: 75,
    atenciones: [
      {
        fecha: "2025-10-25",
        nombreMedico: "Dra. Elena Soto",
        tipoAtencion: "urgencia",
        especialidad: "Geriatría",
      },
    ],
    costo: 280.00,
  },
  {
    numeroPaciente: "P007",
    nombrePaciente: "Andrea Castro",
    edad: 19,
    atenciones: [
      /* {
        fecha: "2025-09-01",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "consulta",
        especialidad: "Nutrición",
      },
      {
        fecha: "2025-09-07",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "seguimiento",
        especialidad: "Nutrición",
      },
      {
        fecha: "2025-09-14",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "seguimiento",
        especialidad: "Nutrición",
      }, */
      {
        fecha: "2025-09-21",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "consulta",
        especialidad: "Medicina General",
      },
    ],
    costo: 340.00,
  },
  {
    numeroPaciente: "P008",
    nombrePaciente: "Pablo Núñez",
    edad: 40,
    atenciones: [
      {
        fecha: "2025-10-03",
        nombreMedico: "Dr. Carlos Ruiz",
        tipoAtencion: "consulta",
        especialidad: "Dermatología",
      },
    ],
    costo: 85.00,
  },
  {
    numeroPaciente: "P009",
    nombrePaciente: "Isabel Torres",
    edad: 55,
    atenciones: [
      /* {
        fecha: "2025-10-12",
        nombreMedico: "Dra. Elena Soto",
        tipoAtencion: "urgencia",
        especialidad: "Ginecología",
      }, */
      {
        fecha: "2025-10-19",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "seguimiento",
        especialidad: "Ginecología",
      },
    ],
    costo: 380.50,
  },
  {
    numeroPaciente: "P010",
    nombrePaciente: "Daniel Marín",
    edad: 24,
    atenciones: [
      {
        fecha: "2025-09-30",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "consulta",
        especialidad: "Medicina Deportiva",
      },
    ],
    costo: 85.00,
  },
  {
    numeroPaciente: "P011",
    nombrePaciente: "Laura Vidal",
    edad: 38,
    atenciones: [
      /* {
        fecha: "2025-10-07",
        nombreMedico: "Dr. Carlos Ruiz",
        tipoAtencion: "urgencia",
        especialidad: "Neurología",
      }, */
      {
        fecha: "2025-10-21",
        nombreMedico: "Dra. Elena Soto",
        tipoAtencion: "seguimiento",
        especialidad: "Neurología",
      },
    ],
    costo: 375.25,
  },
  {
    numeroPaciente: "P012",
    nombrePaciente: "Diego Herrera",
    edad: 68,
    atenciones: [
      {
        fecha: "2025-10-11",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "consulta",
        especialidad: "Otorrinolaringología",
      },
    ],
    costo: 85.00,
  },
  {
    numeroPaciente: "P013",
    nombrePaciente: "Eva Beltrán",
    edad: 29,
    atenciones: [
      /* {
        fecha: "2025-09-20",
        nombreMedico: "Dra. Elena Soto",
        tipoAtencion: "consulta",
        especialidad: "Endocrinología",
      }, */
      {
        fecha: "2025-10-04",
        nombreMedico: "Dr. Carlos Ruiz",
        tipoAtencion: "seguimiento",
        especialidad: "Endocrinología",
      },
    ],
    costo: 180.00,
  },
  {
    numeroPaciente: "P014",
    nombrePaciente: "Felipe Soto",
    edad: 53,
    atenciones: [
      /* {
        fecha: "2025-10-06",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "urgencia",
        especialidad: "Gastroenterología",
      },
      {
        fecha: "2025-10-13",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "seguimiento",
        especialidad: "Gastroenterología",
      }, */
      {
        fecha: "2025-10-27",
        nombreMedico: "Dr. Carlos Ruiz",
        tipoAtencion: "seguimiento",
        especialidad: "Gastroenterología",
      },
    ],
    costo: 510.00,
  },
  {
    numeroPaciente: "P015",
    nombrePaciente: "Gloria Ramos",
    edad: 42,
    atenciones: [
      {
        fecha: "2025-09-22",
        nombreMedico: "Dr. Javier Cano",
        tipoAtencion: "consulta",
        especialidad: "Reumatología",
      },
    ],
    costo: 85.00,
  },
  {
    numeroPaciente: "P016",
    nombrePaciente: "Hugo Vidal",
    edad: 36,
    atenciones: [
      /* {
        fecha: "2025-10-28",
        nombreMedico: "Dra. Elena Soto",
        tipoAtencion: "urgencia",
        especialidad: "Urología",
      },
      {
        fecha: "2025-11-04",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "seguimiento",
        especialidad: "Urología",
      }, */
      {
        fecha: "2025-11-11",
        nombreMedico: "Dra. Sofía Mora",
        tipoAtencion: "seguimiento",
        especialidad: "Urología",
      },
    ],
    costo: 550.00,
  },
];

export const handlers = [
  http.get("/api/patients", async (req) => {
    await delay(2000) 
    console.log('req', req)
    return HttpResponse.json(pacientes)

  })
]