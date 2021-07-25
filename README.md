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
| [`InputText`] | label='Your string' <br>id='your-input-id'<br> placeHolder="Your placeholder" <br> handleChange={function} <br> handleFocus={function} | maxLength={number} <br> error={true\|false} <br> onColor={true\|false} <br> disabled={true\|false}
| [`InputTextarea`] | label='Your string' <br>id='your-input-id'<br> placeHolder="Your placeholder" <br> maxLength={number} <br> handleChange={function} | <br> error={true\|false} <br> onColor={true\|false} <br> disabled={true\|false} <br> showHelper={true\|false}
| [`Link`] | label='Your string' <br> href="/your-link" <br> target="_blank\|_self" | onColor={true\|false} <br> disabled={true\|false} <br> icon={true\|false} <br> handleClick={function}
| [`Menu`] | ariaLabel='Your string' <br> menuList={[{label: 'Your string', tagLabel: 'Your string', isCurrent:true\|false, handleClick: function}]} | isOpen={true\|false}
| [`Modal`] | isOpen={true\|false} <br> isDoubleAction={true\|false} <br> firstActionLabel='Your string' <br> secondActionLabel='Your string' <br> handleConfirm={function} <br> handleClose={function} | isCloseDisabled={true\|false} <br> handleCancel={function}
| [`Notification`] | title="Your string" <br> content="Your string" <br> buttonText="Your string" <br> handleConfirm={function} <br> handleClose={function} | isOpen={true\|false} <br>
| [`OverflowMenu`] | menuList={[{label: 'Your string', tagLabel:'Your string', handleClick:function}]} | isOpen={true\|false} <br> onColor={true\|false} <br> toggleMenu={function} <br> getCurrentMenuItem={function}
| [`InputSelect`] | label='Your string' <br> options={['your option', 'your option']} <br> handleChange={function} | disabled={true\|false} <br> error={true\|false} errorMsg='Your string' <br> placeholder='Your string' <br> onColor={true\|false}
| [`Steps`] | ariaLabel='' <br> steps={[{type: 'current'\|'finish'\|'next',title: 'Your string'}]} | 
| [`Switch`] | label="Your string" <br> checked={true\|false} <br> handleChange={function} | disabled={true\|false} <br> onColor={true\|false}
| [`TabGroup`] | ariaLabel="Your string" <br> children={\<TabItem label={'Your string'}\/>} <br> handleTabClick={function} | onColor={true\|false}
| [`TagCategory`] | label="Your string" <br> icon='shapes' | onColor={true\|false}
| [`TagHighlight`] | label="Your string" <br> tabIndex={number} | 
| [`TagSelect`] | label="Your string" <br> handleChange={function} | disabled={true\|false} <br> onColor={true\|false} <br> active={true\|false}
| [`Tooltip`] | position='bottom-end'\|'bottom-start'\|'bottom'\|'left-end'\|'left-start'\|'left'\|'right-end'\|'right-start'\|'right'\|'top-end'\|'top-start'\|'top' <br> body='Your string' <br> children={React.Component} | onColor={true\|false}
| [`Typography`] | component='heading\|subtitle\|paragraph\|caption' |  If component attribute is 'heading', variant='h1\|h2\|h3\|h4\|h5\|h6' <br><br> If component attribute is 'heading', size='x-small'\|'small'\|'medium'\|'large'\|'x-large'\|'display' <br><br> If component attribute is 'subtitle', size='small'\|'large' <br><br> If component attribute is 'paragraph', size='small'\|'large'

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

In your index.html, in the \<head> tag, import:

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

In your index.html, in the \<head> tag, import:

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