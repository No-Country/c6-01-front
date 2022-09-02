
const careersInitialValue = [
    {
        tittle: "Ingenieria en Informatica",
        image: "campus.jpeg",
        nivelAcademico: 4,
        accesoTransportePublico: 3,
        nivelProfesores: 1,
        ambiente: 2,
        demandaHoraria: 4
    },
    {
        tittle: "Ingenieria en Aeroespacial",
        image: "campus1.png",
        nivelAcademico: 1,
        accesoTransportePublico: 5,
        nivelProfesores: 2,
        ambiente: 3,
        demandaHoraria: 5
    },
    {
      tittle: "Medicina",
      image: "campus2.png",
      nivelAcademico: 2,
      accesoTransportePublico: 5,
      nivelProfesores: 5,
      ambiente: 1,
      demandaHoraria: 4
    },
    {
      tittle: "Licenciatura en enfermeria",
      image: "campus3.png",
      nivelAcademico: 3,
      accesoTransportePublico: 2,
      nivelProfesores: 5,
      ambiente: 5,
      demandaHoraria: 2
    },
    {
      tittle: "Arquitectura",
      image: "campus4.png",
      nivelAcademico: 4,
      accesoTransportePublico: 3,
      nivelProfesores: 3,
      ambiente: 4,
      demandaHoraria: 4
    },
    {
      tittle: "Biologia",
      image: "campus4.png",
      nivelAcademico: 5,
      accesoTransportePublico: 4,
      nivelProfesores: 4,
      ambiente: 3,
      demandaHoraria: 1
    },
    {
      tittle: "Ciencias del comportamiento",
      image: "campus5.png",
      nivelAcademico: 3,
      accesoTransportePublico: 1,
      nivelProfesores: 4,
      ambiente: 4,
      demandaHoraria: 3
    },
    {
      tittle: "Ingenieria mecanica",
      image: "campus5.png",
      nivelAcademico: 3,
      accesoTransportePublico: 3,
      nivelProfesores: 3,
      ambiente: 5,
      demandaHoraria: 4
    },
    {
      tittle: "Odontologia",
      image: "campus6.jpg",
      nivelAcademico: 1,
      accesoTransportePublico: 4,
      nivelProfesores: 2,
      ambiente: 4,
      demandaHoraria: 5
    },
    {
      tittle: "Derecho",
      image: "campus7.png",
      nivelAcademico: 4,
      accesoTransportePublico: 3,
      nivelProfesores: 4,
      ambiente: 3,
      demandaHoraria: 3
    },
    {
      tittle: "Economia",
      image: "campus8.jpg",
      nivelAcademico: 4,
      accesoTransportePublico: 3,
      nivelProfesores: 3,
      ambiente: 2,
      demandaHoraria: 3
    },
    {
      tittle: "Filosofia",
      image: "campus2.png",
      nivelAcademico: 2,
      accesoTransportePublico: 4,
      nivelProfesores: 3,
      ambiente: 5,
      demandaHoraria: 5
    },
    {
      tittle: "Ingenieria quimica",
      image: "campus9.jpg",
      nivelAcademico: 5,
      accesoTransportePublico: 3,
      nivelProfesores: 4,
      ambiente: 4,
      demandaHoraria: 2
    },
    {
      tittle: "Geologia",
      image: "campus10.png",
      nivelAcademico: 3,
      accesoTransportePublico: 2,
      nivelProfesores: 4,
      ambiente: 4,
      demandaHoraria: 2
    }  
  ]

  console.log(careersInitialValue.sort((a, b) => b.demandaHoraria - a.demandaHoraria))