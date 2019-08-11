import { SistemasData } from "./sistema.interface";

export interface OpcionS {
  opcId?: number;
  opcNombre?: string;
  opcNivel?: number;
  opcOrden?: number;
  opcUrl?: string;
  segSistemas?: SistemasData;
}
