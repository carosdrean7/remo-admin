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
