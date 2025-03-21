import opcaoCaractere from "./opcaoCaractere";
import IdsCaracteres from "./idsCaracteres";

export default class Senha {

    static opcoesTem(id: string, opcoes: opcaoCaractere[]) {
        const opcao = opcoes.find(o => o.id === id)
        return opcao!.valor
    }

    static gerarSenha(tamanho: number, opcaoes: opcaoCaractere[]) {
        let caracteresPossiveis = "";

        if (Senha.opcoesTem(IdsCaracteres.NUMEROS, opcaoes)) {
            caracteresPossiveis += "0123456789";
        }

        if (Senha.opcoesTem(IdsCaracteres.MAIUSCULAS, opcaoes)) {
            caracteresPossiveis += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (Senha.opcoesTem(IdsCaracteres.MINUSCULAS, opcaoes)) {
            caracteresPossiveis += "abcdefghijklmnopqrstuvwxyz";
        }

        if (Senha.opcoesTem(IdsCaracteres.ESPECIAIS, opcaoes)) {
            caracteresPossiveis += "!@#$%¨&*()_+-?;./";
        }

        let senha = "";

        for (let i = 0; i < tamanho; i++) {
            const a = Math.floor(Math.random() * caracteresPossiveis.length)
            senha += caracteresPossiveis.charAt(a)
        }

        return senha

    }

    static calcularForca(tamanho: number, opcoes: opcaoCaractere[]) {
        const temNumeros = +Senha.opcoesTem(IdsCaracteres.NUMEROS, opcoes)
        const temMaiusculas = +Senha.opcoesTem(IdsCaracteres.MAIUSCULAS, opcoes)
        const temMinusculas = +Senha.opcoesTem(IdsCaracteres.MINUSCULAS, opcoes)
        const temEspeciais = +Senha.opcoesTem(IdsCaracteres.ESPECIAIS, opcoes)
        const qtdeTipos = temNumeros + temMaiusculas + temMinusculas + temEspeciais

        if (tamanho < 8 || qtdeTipos < 2){
            return 1
        }

        if (qtdeTipos === 4 && tamanho >= 10) {
            return 3
        }

        return 2
    }
}