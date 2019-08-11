export interface SistemasData {
    sisId: number;
    sisNombre: string;
    sisUrlSistema: string;
    sis_estado: boolean;
}

export interface PerfilData {
    perId: number;
    perNombre: string;
    sisId: number;
    sisNombre: string;
    sisUrlSistema: string;
}

export interface PerfilData1 {
    perId: number;
    perNombre: string;
    sisId: number;
    sisNombre: string;

}

export interface OpcionData {
    opcId: number;
    opcNombre: string;
    opcNivel: number;
    opcOrden: number;
    opcUrl: string;
    sisNombre: string;
    sisId: number;
    //  opcImagen: string;
}

export interface OpcionData1 {
    opcId: number;
    opcNombre: string;
    opcNivel: number;
    opcOrden: number;
    opcUrl: string;
    sisNombre: string;
    sisId: number | string;
}

export interface SistemaListData {
    sisId: number | string;
    sisNombre: string;

}

export interface Animal {
    name: string;
    sound: string;
}

export interface Usuario {
    nombre: string;
    apellido: string;
    cedula: string;
    telefono: string;
    id: string;
    perfil: string;
    pidm: string;
    email: String;
    departamento: String;
}