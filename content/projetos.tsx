export interface Projeto {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const projetos: Projeto[] = [
  {
    "slug": "visu-editor",
    "title": "Visu Editor",
    "date": "Dezembro 2025",
    "excerpt": "",
    "content": "<p>Por ser técnico em Redes de Computadores, durante a época da escola, passei pela matéria de Lógica de Programação, que tornou-se muito útil para mim mais tarde. A criação de algoritmos é uma mão na roda para a resolução de problemas práticos e também para o aprendizado de qualquer assunto.</p>\n<p>Lembro que nas aulas usávamos um programa chamado VisualG, criado pelo prof. Carlos Nicolodi, inventor da linguagem Portugol que era usada no programa. Hoje em dia, ao dar aulas particulares, percebi no entanto que não poderia usá-lo. Havia um problema nele que incomodava-me: a interface datada. Ela carecia de uma modernização, considerando as leis envolvidas no processo de aprendizagem e as tendências psicológicas das gerações mais jovens.</p>\n<p>Assim nasceu o Visu, um web app feito para criar algoritmos em Portugol.</p>\n<p>Tomei como base de inspiração o bom e velho VisualG e adicionei alguns upgrades:</p>\n<ul><li>Construído em cima do Princípio de Pareto, buscando apenas 20% das funções necessárias para construir 80% dos algoritmos possíveis.</li><li>Por ser um web app, não precisa instalar, e tem alta responsividade para tablet e celular, pensando nas pessoas que não tem um computador à disposição</li><li>Sistema de abas para gerenciar múltiplos algoritmos</li><li>Integração de exemplos básicos de algoritmos</li><li>Integração de um manual de ajuda, que informa a estrutura básica, os tipos de variáveis, comandos de entrada, operadores, etc</li><li>Editor com syntax highlighting para imersão no algoritmo</li><li>Console de saída acoplado</li><li>Modo foco</li><li>Configurações de acessibilidade com personalização de temas (light/dark) e tamanho de fonte</li></ul>\n<p>\tQualquer pessoa pode acessar o Visu por meio deste  <a href=\"https://visueditor.vercel.app\" target=\"_blank\" rel=\"noopener noreferrer\">link.</a></p>\n<p>**OBS**: Já tenho novas melhorias para o Visu, principalmente na versão mobile. Um exemplo de melhoria futura é a adição de um função code-to-flowchart, onde o Visu geraria um fluxograma baseado no algoritmo criado, para o aluno ter a representação visual do que ele está fazendo.</p>"
  }
]
