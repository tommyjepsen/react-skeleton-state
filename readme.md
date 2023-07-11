# React Skeleton

[![npm version](https://badge.fury.io/js/react-skeleton-state.svg)](https://badge.fury.io/js/react-skeleton-state)

Show a loading skeleton of your content animated before your content arrived from e.g. API or lazy loading

## Installation

```sh
npm install --save react-skeleton-state
```

```sh
yarn add react-skeleton-state
```

## Usage

```js
import ReactSkeleton from "react-skeleton-state";

<ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
<ReactSkeleton width={50} height={50} variant="circle"></ReactSkeleton>
<ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
<ReactSkeleton width={200} height={200} variant="rectangle"></ReactSkeleton>
```


# Props

| Prop                 | Type      | Default | Description                           |
| -------------------- | --------- | ------- | ------------------------------------- |
| width                | number    | "4px" | The width of the skeleton        |
| height               | number    | "4px"  | The height of your skeleton      |
| variant              | string    | "rectangle" | Either "rectangle", "circle" or "text"           |
| fontSize             | string    | null       | fontSize if variant is text          |
| borderRadius         | number    | 4px     | Border radius of the skeleton          |
| backgroundColorStart | string    | #efefef | Start color state for animation   |
| backgroundColorEnd   | number    | #e4e4e4  | End color state for animation |
| children             | reactNode | null    | Include any react children                  |