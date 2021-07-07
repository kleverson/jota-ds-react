# sopa-template-react
> Este é um ambiente preparado para criar novos componentes para React. A idéia aqui é que você possa iniciar de maneira rápida e com padrão os novos componentes. Veja abaixo os pontos que abordamos:

- [Começando](#Começando)
- [Commit](#Commit)
- [Testes](#Testes)
- [Estrutura da Pasta](#Estrutura-da-Pasta)
- [QA](#QA)
- [Storybook](#Storybook)
- [Namespace](#Namespace)
- [Meiuca Engine](#Meiuca-Engine)
- [Scripts](#Scripts)

## Começando
Se já copiou esse projeto, basta executar o comando abaixo e aguardar a instalação de todos os pacotes. Sugerimos o [yarn](https://yarnpkg.com/) como gerenciador de pacotes.
```text
yarn install
```
## Estrutura de Pasta
Se você vai criar um novo componente base, você precisa do seguinte caminho para criar sua pasta de componente base
```text
├── src
|   ├── base-components
|   |   ├── style-type
|   |       ├── component
|   |           ├── index.js
|   |           ├── input.stories.js
|   |           ├── input.test.js
|   |           ├── style.js
|   ├── components
```
ou se você vai criar um novo componente, use este caminho a seguir
```text
├── src
|   ├── base-components
|   ├── components
|       ├── component
|           ├── style-type
|               ├── index.js
|               ├── input.stories.js
|               ├── input.test.js
|               ├── style.js
```
## Commit
Este projeto é baseado no padrão [conventional commits](https://www.conventionalcommits.org/pt-br/v1.0.0/). Para que isso funcione ele já vem instalado o [commitizen](https://github.com/commitizen/cz-cli) onde irá facilitar os novos commits com perguntas padronizadas. Para isso basta executar o comando abaixo:
```text
yarn commit
```
Irá surgir 6 perguntas padronizadas a serem respondidas, veja abaixo:

> 1.  Select the type of change that you're committing
Aqui você define qual o tipo deste commit:
- feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert, [veja aqui](https://www.conventionalcommits.org/pt-br/v1.0.0/#resumo) `o que cada um significa`

> 2.  What is the scope of this change (e.g. component or file name)

Agora defina o escopo deste commit, sobre o que ele é? ou qual arquivo ele mexe? Se o seu commit for referente a um arquivo em especifico, é necessário que você utilize o padrão `src#Nome_do_Arquivo`.
### Exemplo
Imagine que você alterou o arquivo `index.js` no `base-component/component/style-type-1`, neste caso seu escopo (scope) seria: 
```text
src#component
```

> 3.  Write a short, imperative tense description of the change (max `83` chars)

Nesta pergunta defina com uma descrição curta o que seu commit realizou. São 83 caracteres para esta pergunta, porém quanto menor conseguir explicar sua alteração, melhor!

> 4.  Provide a longer description of the change: (press enter to skip)

Agora você pode descrever passo a passo sua alteração, sinta-se a vontade para descrever o que foi alterado da melhor forma possível.

> 5.  Are there any breaking changes?

Está pergunta ainda não é importante para nós pois ainda não vamos gerenciar versões, sendo assim pode sempre responder como `"N"`.

> 6.  Does this change affect any open issues?

Está pergunta também não é importante para nós neste momento, ainda não trabalhmos com issues para elas serem tradas pelo seu commit. Sendo assim pode sempre responder como `"N"`.

## Testes
Para testar no Reactjs usaremos o [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) e o [chai](https://www.chaijs.com/), veja que cada componente tem sua composição de testes, então o projeto sempre irá procurar dentro da pasta o arquivo `*.test.js`. Veja abaixo:

### Estrutura do componente
```
├── component
    ├── index.js => Arquivo root do componente
    ├── input.stories.js => Arquivo de configuração do storybook
    ├── input.test.js => Arquivo de testes do componente
    ├── style.js => Arquivo de estilo do componente
```
### Exemplo ( Input )
```js
import React from 'react';

import chaiFn from '../../chai.js';
import { render } from '@testing-library/react';
import { namespace } from '../../setup.js';

import Input from './index.js';

const chaiPromise = chaiFn();

describe('base-components/input/style-type-1', () => {

  it('should be accessible', async () => {
    const chai = await chaiPromise;

    const { unmount, container } = render(<Input label={'label'} placeholder={'place'}></Input>);

    const input = container.querySelector('input');

    await chai.expect(input).to.be.accessible();

    unmount();
  });

  it('should have base class', async () => {
    const chai = await chaiPromise;

    const { unmount, container } = render(<Input label={'label'} placeholder={'place'}></Input>);

    const input = container.querySelector('input');

    await chai.expect(input).to.have.class(`${namespace}-Input-st1`);

    unmount();
  });
});
```

## QA
Para uma QA sempre recomendamos o Storybook, porém você pode customizar o render para rodar uma QA manipulada por vocë, basta verificar o arquivo abaixo:
```text
├── src
|   ├── index.js
```

## Storybook
Este projeto já está com o Storybook configurando, para executa-lo com todos os componentes aqui codados, basta executar o comando abaixo e o projeto irá rodar na porta 6006. 

```
yarn storybook
```

## Namespace
O nome do DS ([Design System](https://en.wikipedia.org/wiki/Systems_design)) no projeto é dinâmico, isto é ele pode ser alterado sempre na hora de gerar um novo build, sendo assim ele foi separado em um arquivo de setup, você pode encontra-lo no arquivo abaixo e mudar `namespace`.
```text
├── src
    ├── setup.js
```

## Meiuca Engine
Este projeto já tem a [Meiuca Engine](https://github.com/Meiuca/meiuca-engine) configurada para puxar tokens direto do Figma baseado em um `design token` padronizado. Para parâmetrizarmos faça o seguinte:

- Abra o arquivo meiuca-engine.config.js
- Em `figma => accessToken` adicione sua key de acesos do figma ( [Como criar um token de acesso no figma](https://www.figma.com/developers/api#access-tokens) )
- Em `figma => src` adicione o link do Design token no figma

O projeto por padrão vai converter o Design token em arquivos `.js` e exporta-lo no caminho `src/styles/tokens/`

### Tokens exportados
```text
├── src
|   ├── styles
|       ├── tokens
|           ├── branding.js
|           ├── global.js
```

Feito isso, vocë já terá novas folhas de token e branding prontas para uso dentro do projeto.

## Scripts
Veja alguns scripts já configurado para executar o projeto. Lembre-se que para executa-lo basta utilizar `yarn NOME_DO_COMANDO`

> start

Inicia o projeto na porta [http://localhost:3000](http://localhost:3000)

> build

Executa o build completo do projeto

> format

Formata todo o projeto baseado nas configurações do projeto no [prettier](https://prettier.io/).

> lint

Verifica se os arquivos formatados com o prettier de acordo com as opções estão corretos.

> test

Inicia os testes do projeto baseado no [web-test-runner](https://www.npmjs.com/package/@web/test-runner)

> eslint
> storybook

Inicia os componentes no [Storybook](https://storybook.js.org/) na porta [http://localhost:6006](http://localhost:6006)

> build:storybook

Executa o build do projeto com componentes no [Storybook](https://storybook.js.org/)

> prepare

Instala o [husky](https://typicode.github.io/husky/#/)

> commit

Executa o [commitizen](https://github.com/commitizen/cz-cli) para manter um padrão de commit no projeto.