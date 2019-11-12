/**
 * Esse é um arquivo de explicação para os parâmetros no tsconfig.json
 */

export default {
    /**
     * Algumas Opções do Compilador
     */
    "compilerOptions": {
        /**
         * Qual padrão Javascript produzir na transpilação
         */
        "target": "es5",
        
        /**
         * Módulos
         */
        "module": "commonjs",

        /**
         * Uso de Source Maps
         * É usado para ferramentas de Debugging
         */
        "sourceMap": true,

        /**
         * Escolher um diretório para compilação
         */
        "outDir": "out",

        /**
         * Evitar a inferência de ANY
         */
        "noImplicitAny": true
    }
}