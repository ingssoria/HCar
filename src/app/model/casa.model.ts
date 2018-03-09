import { Imagen } from "./imagen";

export class Casa {
    constructor(
        public id?: string,
        public id_casa?: string,
        public tipo_casa?: string,
        public tipo_renta?: string,
        public direcc?: string,
        public anfitrion?: string,
        public cant_hab?: number,
        public capacidad?: number,
        public descrip?: string,
        public imagenes?: Imagen[]
    ){};
}
