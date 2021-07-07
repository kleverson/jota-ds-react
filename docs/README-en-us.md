# sopa-template-wc
> This is an environment prepared to create new components for Reactjs. The idea here is that you can start new components quickly and by default. See below the points we covered:

- [Starting](#Starting)
- [Commit](#Commit)
- [Test](#Test)
- [Folder Structure](#Folder-Structure)
- [QA](#QA)
- [Storybook](#Storybook)
- [Namespace](#Namespace)
- [Meiuca Engine](#Meiuca-Engine)
- [Scripts](#Scripts)

## Starting
If you have already copied this project, just execute the command below and wait for the installation of all packages. We suggest [yarn](https://yarnpkg.com/) as a package manager.
```text
yarn install
```
## Folder Structure 
If you are going to create a new base component, you need the following path to create your base component folder
```text
├── src
|   ├── base-components
|   |   ├── component
|   |       ├── style-type
|   |           ├── index.js
|   |           ├── input.stories.js
|   |           ├── input.test.js
|   |           ├── style.js
|   ├── components
```
if you are going to create a new component, use this path below
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
This project is based on the standard [conventional commits](https://www.conventionalcommits.org/pt-br/v1.0.0/). To make this work, you have already installed [commitizen](https://github.com/commitizen/cz-cli) where it will facilitate new commits with standardized questions. To do this, simply execute the command below:
```text
yarn commit
```
There will be 6 standard questions to be answered, see below:

> 1.  Select the type of change that you're committing
Here you define the type of this commit:
- feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert, [read more](https://www.conventionalcommits.org/pt-br/v1.0.0/#resumo) `what each means`

> 2.  What is the scope of this change (e.g. component or file name)

Now define the scope of this commit, what is it about? or which file does it move? If your commit is for a specific file, it is necessary that you use the default `src#Filename`.
### Example
Imagine that you changed the `index.js` file in` base-component/input/style-type-1`, in which case your scope would be:
```text
src#input
```

> 3.  Write a short, imperative tense description of the change (max `83` chars)

In this question, define with a short description what your commit has accomplished. There are 83 characters for this question, but the shorter you can explain your change, the better!

> 4.  Provide a longer description of the change: (press enter to skip)

Now you can describe your change step by step, feel free to describe what has been changed in the best possible way.

> 5.  Are there any breaking changes?

This question is still not important for us as we are not yet going to manage versions, so you can always answer as `"N"`.

> 6.  Does this change affect any open issues?

This question is also not important for us at the moment, we have not yet worked on issues for them to be dealt with by your commit. So you can always answer as `"N"`.

## Test
For testing in Reactjs we will use [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) and [chai](https://www.chaijs.com/), see that each component has its test composition, then the project will always look for the file `* .test.js` inside the folder. See below:

### Folder Structure
```
├── component
    ├── index.js => File root component
    ├── input.stories.js => File config storybook
    ├── input.test.js => File test component
    ├── style.js => File style component
```
### Example ( Input )
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
For a QA we always recommend the Storybook, but you can customize the render to run a QA handled by you, just check the file below:
```text
├── src
|   ├── index.js
```

## Storybook
This project is already with the Storybook configuring, to execute it with all the components coded here, just execute the command below and the project will run on port 6006.
```
yarn storybook
```

## Namespace
The name of the DS ([Design System](https://en.wikipedia.org/wiki/Systems_design)) in the project is dynamic, that is, it can always be changed when generating a new build, so it was separated in a setup file, you can find it in the file below and change `namespace`.
```text
├── src
    ├── setup.js
```

## Meiuca Engine
This project already has the [Meiuca Engine](https://github.com/Meiuca/meiuca-engine) configured to pull tokens straight from Figma based on a standardized `token design`. To parameterize it, do the following:

- Open file meiuca-engine.config.js
- In `figma => access Token` add your figma access key ([How to create an access token in figma](https://www.figma.com/developers/api#access-tokens))
- In `figma => src` add the link of the Design token to figma

The project by default will convert the Design token into `.js` files and export it in the `src/styles/tokens/` path

### Exported tokens
```text
├── src
|   ├── styles
|       ├── tokens
|           ├── branding.js
|           ├── global.js
```

Once this is done, you will already have new token and branding sheets ready for use within the project.

## Scripts
See some scripts already configured to run the project. Remember that to run it just use `yarn NAME_COMAND`

> start

Starts the project at the door [http://localhost:3000](http://localhost:3000)

> build

Performs the complete build of the project

> format

Formats the entire project based on the project settings in the [prettier](https://prettier.io/).

> lint

Checks whether the files formatted with the prettier according to the options are correct.

> test

Starts testing the project based on the [web-test-runner](https://www.npmjs.com/package/@web/test-runner)

> eslint
> storybook

Starts the components in the [Storybook](https://storybook.js.org/) on the port [http://localhost:6006](http://localhost:6006)

> build:storybook

Builds the project with components in the [Storybook](https://storybook.js.org/)

> prepare

Install [husky](https://typicode.github.io/husky/#/)

> commit

Run [commitizen](https://github.com/commitizen/cz-cli) to maintain a commit pattern on the project.