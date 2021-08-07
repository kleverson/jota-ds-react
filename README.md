# Jota DS

This is the Open Source Design System from [Meiuca](https://meiuca.co/)

Below we have all the instructions for you to use Jota DS as a dependency and work on building your product from it. Too easy. Use it to understand how your day to day would work with a Design System, to show the advantages to your stakeholders or simply to focus on your studies.

## Playground

Acess the component playground, in storybook, to know how to use our Open Source Design System [Storybook](https://storybook.jota.meiuca.co/)

## Components

| Component    | Must have properties  | optional properties
| ----------    |  ------  |  ------
| [`Accordion`]  | `label`='Your string' <br>`id`='your-accordion-id'<br>`children`=[string \| image \| others] |  `onColor`={true \| false} <br>`labelHeadingVariant`='h2 \| h3 \| h4' <br>`opened`="true \| false" 
| [`Alert`]   | `title`='Your Title string' <br>`text`='Your alert text'<br>`type`='helper \| warning ' |  `isOpen`={true \| false} 
| [`Avatar`] | `imgAlt`='Your alt text' | `size`='small \| medium \| large' <br>`onColor`={true \| false} <br>`hasNotification`={true \| false} <br>`imgUrl`='www.yourUrl'
| [`Banner`] | `Title`='Your title' <br> `bgColor`='#hexaColor'<br>  `image`='Your image path' | `headingVariant `='h2 \| h3 \| h4' <br>`paragraph`='Your paragraph text' <br>`highTypography`={true \| false} <br>`handleClick`={function}
| [`Brand`] | `externalUrl`='Your brand link' <br>`size`='small \| medium \| large' |  `type`='symbol \| logotype' <br> `alt`='alt text for brand'
| [`Button`] | `label`='button label' <br> `type`='primary \| secondary' | `icon`={true \| false} <br>`iconType`='any icon from our icon list' <br>`onColor`={true \| false}<br>`disabled`={true \| false} <br>`handleClick`={function}
| [`ButtonGroup`] | `primaryLabel`='first button label' <br> `tertiaryLabel`='second button label | `primaryDisabled`={true \| false} <br> `tertiaryDisabled`={true \| false} <br>`onColor`={true \| false}<br>`handleCancel`={function}<br>`handleConfirm`={function}
| [`ButtonIcon`] | `size`='small \| medium \| large' <br> `icon`='any icon from our icon list' | `onColor`={true \| false}<br>`handleClick`={function}<br>`handleBlur`={function}
| [`Cardbase`] | `children`='card content' | `onColor`={true \| false}<br>`handleClick`={function}<br>`noPadding`={true \| false}
| [`Cardimage`] | `children`='card content' | `onColor`={true \| false}<br>`handleClick`={function}<br>`image`='your image path'
| [`InputCheckbox`]  | `value`='checkbox text' <br>`name`='Label and input name' | `disabled`={true \| false} <br>`onColor`={true \| false} <br>`handleChange`={function}
| [`Header`] | `logoSource`='your-image.jpg \| your-image.svg \| your-image.png'<br> `linkList`={[{label: '', href: '', target: '', disabled: { true \| false }, currentActive: { true \| false }}]} <br> `menuList`={[{label: 'Your string', tagLabel:'Your string', handleClick:function}]} | `isLoggedIn`={true \| false}<br> `hasLinks`={true \| false} <br> `mainMenuIsOpen`={true \| false} <br> `ghost`={true \| false} <br><br> If `isLoggedIn` is set to true, `avatar`={{name: 'Your string', imgUrl: 'your-image.jpg \| your-image.svg \| your-image.png', imgAlt: 'Your string', hasNotification: true \| false}}
| [`HeaderEmpty`] | `logoSource`='your-image.jpg \| your-image.svg \| your-image.png'<br> | `children`={React.Component} <br> `hasLinks`={true \| false} <br> `mainMenuIsOpen`={true \| false} <br> `ghost`={true \| false}
| [`Icon`]  | `icon`='any icon from our icon list' <br> `size`='small \| medium \| large' | `className`='name for icon class' <br>`id`='your-icon-id'
| [`IconShape`]  | `icon`='any icon from our icon list' <br> `size`='small \| medium \| large' | `variant`='default \| warning \| helper' 
| [`InputPassword`]  | `label`='Your string' <br>`id`='your-input-id'<br>`placeHolder`="Your placeholder" <br>`maxLength`={number} <br>`handleChange`={function} <br> `helperText`='Warning helper text in case of error' | <br>`error`={true\|false} <br>`onColor`={true\|false} <br>`disabled`={true\|false} 
| [`InputRadiobutton`] | `listData`=[{label: 'Your label',value: 'The Value',}] | `onColor`={true\|false} <br> `handleChange`={function} <br> `listData`=[{checked: true\|false ,disabled: true\|false}] 
| [`InputSearch`] | `formID`='your-form-id' <br>`formName `='your form name'<br>`inputID `="your-input-id" <br>`inputName`='your input name' <br>`placeholder`='search bar placeholder' | `ariaLabel`='text for your aria label' <br>`hasPreventDefault`={true\|false} <br>`onColor`={true\|false} <br>`disabled`={true\|false} <br>`handleSubmit`={function} <br>`handleInputChange`={function}
| [`InputText`] | `label`='Your string' <br>`id`='your-input-id'<br>`placeHolder`="Your placeholder" <br>`handleChange`={function} <br>`handleFocus`={function} | `maxLength`={number} <br>`error`={true\|false} <br>`onColor`={true\|false} <br>`disabled`={true\|false}
| [`InputTextarea`] | `label`='Your string' <br>`id`='your-input-id'<br>`placeHolder`="Your placeholder" <br>`maxLength`={number} <br>`handleChange`={function} | <br>`error`={true\|false} <br>`onColor`={true\|false} <br>`disabled`={true\|false} <br>`showHelper`={true\|false}
| [`Link`] | `label`='Your string' <br>`href`='/your-link' <br>`target`='_blank\|_self' | `onColor`={true\|false} <br>`disabled`={true\|false} <br>`icon`={true\|false} <br>`handleClick`={function}
| [`Menu`] | `ariaLabel`='Your string' <br>`menuList`={[{label: 'Your string', tagLabel: 'Your string', isCurrent:true\|false, handleClick: function}]} | `isOpen`={true\|false}
| [`Modal`] | `isOpen`={true\|false} <br>`isDoubleAction`={true\|false} <br>`firstActionLabel`='Your string' <br>`secondActionLabel`='Your string' <br>`handleConfirm`={function} <br>`handleClose`={function} | `isCloseDisabled`={true\|false} <br>`handleCancel`={function}
| [`Notification`] | `title`="Your string" <br>`content`="Your string" <br>`buttonText`="Your string" <br>`handleConfirm`={function} <br>`handleClose`={function} | `isOpen`={true\|false} <br>
|[`OverflowMenu`] | `menuList`={[{label: 'Your string', tagLabel:'Your string', handleClick:function}]} | `isOpen`={true\|false} <br>`onColor`={true\|false} <br>`toggleMenu`={function} <br>`getCurrentMenuItem`={function}
| [`InputSelect`] | `label`='Your string' <br>`options`]=['your option', 'your option']} <br>`handleChange`={function} | `disabled`={true\|false} <br>`error`={true\|false} `errorMsg`='Your string' <br>`placeholder`='Your string' <br>`onColor`={true\|false}
| [`Steps`] | `ariaLabel`='' <br>`steps`]=[{type: 'current'\|'finish'\|'next',title: 'Your string'}]} | 
| [`Switch`] | `label`="Your string" <br>`checked`={true\|false} <br>`handleChange`={function} | `disabled`={true\|false} <br>`onColor`={true\|false}
| [`TabGroup`] | `ariaLabel`="Your string" <br>`children`]=\<TabItem label={'Your string'}\/>} <br>`handleTabClick`={function} | `onColor`={true\|false}
| [`TagCategory`] | `label`="Your string" <br>`icon`='shapes' | `onColor`={true\|false}
| [`TagHighlight`] | `label`="Your string" <br>`tabIndex`={number} | 
| [`TagSelect`] | `label`="Your string" <br>`handleChange`={function} | `disabled`={true\|false} <br>`onColor`={true\|false} <br>`active`={true\|false}
| [`Tooltip`] | `position`='bottom-end'\|'bottom-start'\|'bottom'\|'left-end'\|'left-start'\|'left'\|'right-end'\|'right-start'\|'right'\|'top-end'\|'top-start'\|'top' <br>`body`='Your string' <br>`children`={React.Component} | `onColor`={true\|false}
| [`Typography`] | `component`='heading\|subtitle\|paragraph\|caption' |  If component attribute is `heading`, `variant`='h1\|h2\|h3\|h4\|h5\|h6' <br><br>If component attribute is `heading`, `size`='x-small'\|'small'\|'medium'\|'large'\|'x-large'\|'display' <br><br>If component attribute is `subtitle`, `size`='small'\|'large' <br><br>If component attribute is `paragraph`, `size`='small'\|'large' <br><br>`onColor`={true\|false}

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

## CodeSandbox

Still have doubts? View our example on CodeSandbox:

[![Edit stupefied-cannon-cjttc](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/stupefied-cannon-cjttc?fontsize=14&hidenavigation=1&theme=dark)