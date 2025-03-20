import opcaoCaractere from "@/model/opcaoCaractere"
import IdCaracteres from "@/model/idsCaracteres"

const opcoes: opcaoCaractere[] = [
    { id: IdCaracteres.NUMEROS, nome: "Números", valor: false },
    { id: IdCaracteres.MAIUSCULAS, nome: "Letras Maiúsculas", valor: false },
    { id: IdCaracteres.MINUSCULAS, nome: "Letras Minúsculas", valor: false },
    { id: IdCaracteres.ESPECIAIS, nome: "Caracteres Especiais", valor: false },
]

export default opcoes