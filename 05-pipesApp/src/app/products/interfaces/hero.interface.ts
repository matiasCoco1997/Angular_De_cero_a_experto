

export enum Color{
  azul, negro, rojo, verde
}


export interface Hero {
  name:string,
  canFly: boolean,
  color: Color;
}
