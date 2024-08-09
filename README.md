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
```
