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

export interface PerfilData2 {
  perId: number;
  perNombre: string;
  sisId: number;
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
export interface Opciones {
  perId: number;
  opcId: number;
}
export interface Usua {
  perId: number;
  usuId: number;
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

export interface credentials {
  spridenId: string;
  usuClave: string;
}

export interface UsuarioData {
  usuId: number;
  usuCc: string;
  usuNombres: string;
  usuApellidos: string;
  usuEmail: string;
  usuFecharegistro: Date;
  usuEstado: string;
  spridenId: string;
  spridenPidm: number;
}
