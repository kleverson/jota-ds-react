# Jota DS

This is the Open Source Design System from [Meiuca](https://meiuca.co/)

Below we have all the instructions for you to use Jota DS as a dependency and work on building your product from it. Too easy. Use it to understand how your day to day would work with a Design System, to show the advantages to your stakeholders or simply to focus on your studies.

## Playground

Acess the component playground, in storybook, to know how to use our Open Source Design System [Storybook](https://storybook.jota.meiuca.co/)

## Components

| Component    | Must have properties  | optional properties
| ----------    |  ------  |  ------
| [`Accordion`]  | label='Your string' <br>id='yourAccordionId'<br> children=[string \| image \| others] |  onColor='true \| false' <br> labelHeadingVariant='h2 \| h3 \| h4' <br> opened="true \| false" 
| [`Alert`]   | title='Your Title string' <br>text='Your alert text'<br> type='helper \| warning ' |  isOpen='true \| false' 
| [`Avatar`] | imgAlt='Your alt text' |  size='small \| medium \| large' <br> onColor='true \| false' <br> hasNotification='true \| false' <br> imgUrl='www.yourUrl'
| [`Banner`]
| [`Brand`]
| [`Button`]
| [`ButtonGroup`]
| [`ButtonIcon`]
| [`Cardbase`]
| [`Cardimage`]
| [`InputCheckbox`]
| [`Header`]
| [`HeaderEmpty`]
| [`Icon`]
| [`IconShape`]
| [`InputPassword`]
| [`InputRadiobutton`]
| [`InputSearch`]
| [`InputText`]
| [`InputTextarea`]
| [`Link`]
| [`Menu`]
| [`Modal`]
| [`Notification`]
| [`OverflowMenu`]
| [`InputSelect`]
| [`Steps`]
| [`Switch`]
| [`TabGroup`]
| [`TabItem`]
| [`TagCategory`]
| [`TagHighlight`]
| [`TagSelect`]
| [`Tooltip`]
| [`Typography`]

## Quick start - React

#### 1) Install

Install DS from:

```sh
yarn add @jota-ds/lib-react
```


#### 2) Import a component

In your React App, import a component as:

```
import { Button } from '@jota-ds/lib-react';
```

Sample usage of button component.

```
<Button label="Label" type="primary" />
```

#### 3) Import DS default fonts

In your index.html, in the <head> tag, import:

```
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## Quick start - NextJS

Our library can be consumed in your NextJS app. Follow the instructions below:

#### 1) Install

```sh
yarn add @jota-ds/lib-react
```

#### 2) Import a component

Sample usage of a button component in NextJS.

```
import {DynamicButton} from "@jota-ds/lib-react/next"
```

Then:

```
<DynamicButton label="Label" type="primary" />
```

#### 3) Import DS default fonts

In your index.html, in the <head> tag, import:

```
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```