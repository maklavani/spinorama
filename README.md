# Spinorama

Spinorama is a highly customizable and versatile carousel component for **React** applications, specifically designed to work seamlessly with **Material-UI**. With Spinorama, you can easily create stunning and interactive carousels that showcase your content in the most visually appealing way.

## Installing

```bash
npm install spinorama
```

> **Note**
>
> To use **Spinorama** in your project, you need to have Material-UI installed. If you haven't installed it yet, you can add it to your project by running the following command:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Example

```jsx
'use client'

import { Spinorama, SpinoramaWrapper, SpinoramaItem, SpinoramaActions, SpinoramaThumbnails, SpinoramaThumbnail, SpinoramaButtons, SpinoramaNext, SpinoramaPrev } from 'spinorama'

...

<Spinorama>
	<SpinoramaWrapper>
		<SpinoramaItem>Item 1</SpinoramaItem>
		<SpinoramaItem>Item 2</SpinoramaItem>
		<SpinoramaItem>Item 3</SpinoramaItem>
	</SpinoramaWrapper>

	<SpinoramaActions>
		<SpinoramaButtons>
			<SpinoramaPrev />
			<SpinoramaNext />
		</SpinoramaButtons>

		<SpinoramaThumbnails justify="end">
			<SpinoramaThumbnail />
			<SpinoramaThumbnail />
			<SpinoramaThumbnail />
		</SpinoramaThumbnails>
	</SpinoramaActions>
</Spinorama>

...
```

## Customizing

### Spinorama Component

You can customize the `Spinorama` component by passing the following props:<br>

| Prop | Default | Description |
| - | - | - |
| `interval` | 10000 | The duration of the interval between slide transitions (in milliseconds). This is the time it takes for the transition to complete. |
| `duration` | 1000 | The duration of the slide change animation (in milliseconds). This is the time it takes for the animation to complete. |
| `ease` | power1.inOut | The easing function to apply to the transition between slides. This can be any valid [GSAP easing function](https://greensock.com/ease-visualizer/) |
<br>

Here's an example of how to customize the `Spinorama` component:

```jsx
<Spinorama interval={10000} duration={1000} ease="power1.inOut">
```

### SpinoramaWrapper Component

| Prop | Default | Description |
| - | - | - |
| `justify` | start | Determines how the slides are aligned. Available options are: <ul><li>`start`: aligns the slides to the left</li><li>`end`: aligns the slides to the right</li></ul> |
| `reverse` | false | Determines the direction of the slideshow. When `true`, the slides will be displayed in reverse order. |
| `spacing` | 0 | Defines the space between the type `item` components. This can be any valid [Spacing value](https://mui.com/material-ui/react-grid/#spacing). |
<br>

```jsx
<SpinoramaWrapper justify="start" direction={false} spacing={0}>
```
