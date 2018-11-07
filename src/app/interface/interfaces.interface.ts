export interface Post {
    _id?: string;
    titulo: string;
    contenido: string;
    fechaPublicacion: string;
}

export interface Actividad {
    _id?: string;
    titulo: string;
    fecha: string;
    tipo: string;
    descripcion: string;
}

export interface Nivel {
    _id?: string;
    nombre: string;
    precio: string;
}

export interface DatosColegio {
    _id?: string;
    nombreColegio: string;
    direccion: string;
    telefono: Number;
}

export interface Nosotros {
    _id?: string;
    presentacion: string;
    mision: string;
    vision: string;
    historia: string;
}
export interface Directiva {
    _id?: string;
    gradoAcademico: string;
    photoUrl: string;
    presentacion: string;
    cargo: string;
    telefono: Number;
}

export interface Docente {
    _id?: string;
    nombre: string;
    apellido: string;
    telefono: Number;
    sexo: string;
    fechaNacimiento: string;
}

export interface CursoVerano {
    _id?: string;
    _idDocente?: string;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFian: string;
}

export interface Grado {
    _id?: string;
    _idNivel?: string;
    nombre: string;
    turno: string;
}

export interface Curso {
    _id?: string;
    _idDocente?: string;
    _idGrado?: string;
    nombre: string;
}

export interface Libro {
    _id?: string;
    _idCruso?: string;
    nombre: string;
    autor: string;
    descripcion: string;
}