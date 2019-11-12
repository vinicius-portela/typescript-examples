/**
 * EXEMPLOS E EXPLICAÇÃO DO TYPESCRIPT
 */

// O estudo e exemplos se baseiam em:
// https://medium.com/@oieduardorabelo/typescript-o-guia-definitivo-1a63b04259cc
// http://www.typescriptlang.org/play/index.html (Seus Exemplos)
// http://www.typescriptlang.org/docs/

// ====================================================================================================
// INSTALAÇÃO E COMPILAÇÃO

// Primeiro instalar typescript com:
// (sudo) npm install -g typescript

// Compilar
// tsc

// Compilar um arquivo
// tsc {file}

// Compilar com os parâmetros do tsconfig
// tsc -p {file}

// ====================================================================================================
// TIPOS DE VARIÁVEIS

let numeros : number = 1;

let strings : string = 'Uma string aqui';

let booleans : boolean = true;

let qualquer : any = 'O Compilador é responsável por inferir meu tipo';
qualquer = 2;

// Se enquadra aqui null ou undefined
let nulo : void; 

// Como exemplo: função jogada pelo throw
let nunca : never;

// A partir do TS 3.0
// Forma segura do 'any', será assegurado uma verificação de tipo antes 
let desconhecido : unknown;

// ====================================================================================================
// FUNÇÕES

// Tipos nos parâmetros são dados por:
// parâmetro: TIPO

// O valor de retorno também deve ser dado
// function name(params): TIPO {}
function count(user: string, val1: number, val2: number): string {
    let sum: number = val1 + val2;
    return(`O usuário ${user} somou ${val1} + ${val2} = ${sum}`);
}

// Para Fornecer o tipo de retorno em uma com ANY
function switchType(value: any): any {
    if(typeof value === 'string'){
        return parseInt(value);
    }else if(typeof value === 'number'){
        return String(value);
    }
}

// Metódos de chamar essa função determinando seu tipo de retorno
const num = <number> switchType('123');
const str = switchType(123) as string;

// ====================================================================================================
// CONTINUANDO

// Fazer variável aceitar apenas determinados valores
let tipo: 'string' | 'number' | 'void' | 'any';

// Outro exemplo:
let cor: 'azul' | 'vermelho' | 'verde' | 'amarelo';

// Atribuição de tipo pelo typeof
let ponto2d: {
    x: number, 
    y: number
}

let ponto: typeof ponto2d;

// Uso de Interfaces
interface Ponto2d {
    x: number;
    y: number;
}

let ponto2: Ponto2d;
let ponto3: Ponto2d;

// Extensão de Interfaces
interface Ponto3d extends Ponto2d {
    z: number;
}

let ponto4: Ponto3d;

// Algumas propriedades podem ser opcionais
// Isso é feito através do " ?: "
interface Ponto {
    x: number;
    y?: number;
    z?: number;
}

// É possível também adicionar métodos em uma interface
interface PontoMetodo {
    x: number;
    y: number;
    criarPonto(x, y): Ponto;
}

// Setar uma função como construtor -> Com "new"
// Aqui o Ponto poderia ser usado como construtor do Ponto
let Construtor: {
    new (): Ponto;
}

// Setar Index de Lista Ordenada
interface lista {
    [key: string]: Ponto;
}

// Tuplas
let ponto5 : [ number, number, number ] = [ 0, 0, 0 ];

// Sobrecarga de Funções
// Primeiro as Sobrecargas
function overload(value: number): string;
function overload(value: string): number;

// Depois a  função em si
function overload(value: any): any{
    if(typeof value === 'string'){
        return parseInt(value);
    }else if(typeof value === 'number'){
        return String(value);
    }
}

console.log(typeof overload(123));

// Valores Genéricos, Arrays e Promisses
interface Arrayish<T> {
    map<U>(callback: (value: T, index: number, array: Arrayish<T>) => U, thisArg?: any): Array<U>;
}