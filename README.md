Memo -> Sempre que um componente pai sofre um fluxo de renderização, faz com que os componentes filhos não sofram o fluxo de renderização também caso não mude
 Por padrão ele faz um shallow compare (comparação rasa)
 Quando tem objeto ou arrays que não deem para comparar com o === (igualdade referencial), será necessário passar uma função junto com o memo


 Quando devo usar o memo?

 1. Pure Functional Components (Components puros)
  - components que servem para abstrair a parte visual da aplicação, usado pra dividir a interface
  - dados os mesmos parâmetros (props), sempre retornam o mesmo resultado visual
  - NÃO É PURO quando envolve alguma lógica para exibição ou que está conectado com algo externo da aplicação que pode devolver um valor diferente
 2. Render too often (Componentes que renderizam demais)
 3. Re-renders with same props (re-renders com as mesmas props)
 4. Medium to big size (Componentes médios para grandes)


---
O useMemo serve para memorizar (memoization) um valor

 Quando devo usar o useMemo?

 1. Cálculos pesados
 2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)
  - Serve também para evitar com que a variável ocupe um novo lugar na memória quando repassa o valor para seus filhos


---
 Quando devo usar o useCallback?

 1. Quando precisar repassar funções para componentes (Props drilling / ContextAPI)


---
 Quando devo usar a formatação de dados?

 1. Quando precisar fazer cálculos e formatações dentro dos componentes e puder fazer depois de um request, antes do repasse


---
 Quando devo usar o Code Splitting (Lazy load / next dynamic)?

 1. Quando precisar exibir componentes e/ou funções de acordo com a ação do usuário, para reduzir o bundle do build


---
 Quando devo usar o Virtualized (lib: react-virtualized por exemplo)?

 1. Quando precisar exibir uma lista muito grande e precisar criar um "scroll infinito"


---
 Quando devo usar o Bundle Analyzer?

 1. Sempre antes de colocar o código em produção pra poder analisar o que está pesando mais no bundle.


