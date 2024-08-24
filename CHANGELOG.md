# Release Notes
All notable changes to this package will be documented in this file.

# 0.4.46
- Added **prismjs** to the project

# 0.4.45
- Renamed **md** directory to **markdown**
- Added a `docs` button in the **home** page

# 0.4.44
- Fixed bugs in building **documentation**

# 0.4.43
- Upgraded packages

# 0.4.42
- Created content for the home page in the **documentation** in the `mdx` files

# 0.4.41
- Created a circle animation for the home page in the **documentation**

# 0.4.40
- Upgraded packages in the **documentation**

# 0.4.39
- Upgraded packages in the **documentation**
- Created main page in the **documentation**
- Added `three`, `@react-three/drei`, and `@react-three/fiber` packages to the project

# 0.4.38
- Updated **README.md**

# 0.4.37
- Added a section on customizing `SpinoramaWrapper` to **README.md**

# 0.4.36
- Added `customizing` section to **README.md**

# 0.4.35
- Improved **README.md** by adding a summary of the changes necessary when using `Spinorama` in **Next.js** apps

# 0.4.34
- Updated **README.md** to include more detailed instructions on how to use `Spinorama`

# 0.4.33
- Removed all unnecessary `cloneElement` calls in the components

# 0.4.32
- Added more margin in the `rightHandSide` option

# 0.4.31
- Added the `rightHandSide` prop to the **Generate Layout** helper

# 0.4.30
- Created `ResponsiveStyleValue` for `layout` attributes in the **SpinoramaThumbnails** and **SpinoramaWrapper** components

# 0.4.29
- Create `helper` functions for the package

# 0.4.28
- Fixed bug in components all props to the DOM elements

# 0.4.27
- Added the `spacing` prop to the **SpinoramaThumbnails** and **SpinoramaWrapper** components

# 0.4.26
- Added the ability to provide custom buttons to the **SpinoramaThumbnail** component

# 0.4.25
- Fixed bug in setting `animation duration` in the **Spinorama** component

# 0.4.24
- Created `layout` for positioning the **SpinoramaNext** and **SpinoramaPrev** components.

# 0.4.23
- Added a `relative position` for the **Spinorama** component

# 0.4.22
- Fixing a bug in setting a `ref` to an inner child of **SpinoramaNext** and **SpinoramaPrev** components

# 0.4.21
- Changed `duration` to `interval` and `animateDuration` to `duration` in the **Spinorama** component

# 0.4.20
- Modify the **SpinoramaNext** and **SpinoramaPrev** components, which can now accept custom buttons

# 0.4.19
- Added `forwardRef` to the components
- Added `use client` directive to enable debugging in **Next.js** apps

# 0.4.18
- Implement the `findItemPosition` function, which is used to find the exact position of a specific item within a list of items

# 0.4.17
- Reset `interval` after **button** components are clicked

# 0.4.16
- Create a `useRef` array for the **SpinoramaThumbnail** components

# 0.4.15
- Initialize the class `selected` for **SpinoramaItem** and **SpinoramaThumbnail** components

# 0.4.14
- Fixed **bugs** in the `interval` function

# 0.4.13
- Renamed **SpinoramaThumbnailDot** to **SpinoramaThumbnail** component

# 0.4.12
- Create a click `event` function for **SpinoramaNext** and **SpinoramaPrev** button components

# 0.4.11
- Fixed a bug related to the `interval` in the **Spinorama** component

# 0.4.10
- Fixed a bug in passing `selected` in the **Spinorama** component

# 0.4.9
- Passed `selected` as `useState` to child components from **Spinorama** component

# 0.4.8
- Set the class `selected` to the item in the `nextItem` function of the **Spinorama** component

# 0.4.7
- Added `animateDuration` and `ease` properties to the **Spinorama** component, enabling customization of the animation duration and easing function

# 0.4.6
- Create `slide` animation with **gsap**

# 0.4.5
- Install **GreenSock Animation Platform** (GSAP) and its React integration `(@gsap/react)` for controlling animations

# 0.4.4
- Changed `active` to `selected` in the **ThumbnailDot** component

# 0.4.3
- Added `margin-top` to **SpinoramaActions** component

# 0.4.2
- Added the ability to `center` align items within the **SpinoramaActions** component
- Set the `small` size for the **SpinoramaThumbnailDot** component
- Create `Next` and `Prev` components to control the navigation of the slider

# 0.4.1
- Created a `remove` script to remove unnecessary files and directories upon package publishing

# 0.4.0
- Added `mdx-components` and `not-found` to the **documentation** project

# 0.3.42
- Added `props` to components to enhance functionality and appearance

# 0.3.41
- Create `nextItem` callback in **Spinorama** component to show the next Item

# 0.3.40
- Added `color` to **SpinoramaThumbnailDot** component

# 0.3.39
- Added `opacity` to **SpinoramaThumbnailDot** component

# 0.3.38
- Create `SpinoramaThumbnailDot` component, enabling thumbnail navigation in the slider

# 0.3.37
- Add `justify` and `reverse` props to the **SpinoramaThumbnails** component, which allows you to control how the thumbnails are aligned and displayed in reverse order

# 0.3.36
- Create `SpinoramaThumbnails` and `SpinoramaActions` components

# 0.3.35
- Remove `publish.yml` workflow

# 0.3.34
- Update publishConfig url

# 0.3.33
- Transferred the package to `regiti`

# 0.3.32
- Renamed the package to `spinorama`

# 0.3.31
- Ranamed `publish.yml` to `github.yml`

# 0.3.30
- Changed configurations of `publish` workflow

# 0.3.29
- Ranamed `npmjs.yml` to `publish.yml`

# 0.3.28
- Update the `repository url` in the **package.json** file

# 0.3.27
- Removed the `.npmrc` file

# 0.3.26
- Update **.npmrc** to include `npm.pkg.github`

# 0.3.25
- Created `.npmrc` file

# 0.3.24
- Update publishConfig url

# 0.3.23
- Update the `repository url` in the **package.json** file

# 0.3.22
- Added `package-lock.json` files to the **project**

# 0.3.21
- Run the `publish` workflow when pushing to the **main** branch

## 0.3.20
- Created publish `GitHub` and `npmjs` workflow files. These workflows will be responsible for publishing the package to both **GitHub** Packages and **npmjs** registry when a new release is created

## 0.3.19
- Added `publishConfig` to **package.json**, which specifies the npm registry where the package will be published

## 0.3.18
- Fixed `bug` in ignoring `index.d.ts` files inside the **documentation** project

## 0.3.17
- Added `url` for **contributors**

## 0.3.16
- Added `contributors` to the **package.json** file

## 0.3.15
- Update `.gitignore` in documentation to exclude **PWA** service worker files

## 0.3.14
- Fixed `bugs` in exporting components

## 0.3.13
- Create `SpinoramaButtons` component

## 0.3.12
- All component files have been renamed to `index` for simplicity and clarity

## 0.3.11
- Removed an extra `index` file in the components directory

## 0.3.10
- Structure output has been simplified to use simpler components. This change enhances usability and readability of the package

## 0.3.9
- Both `SpinoramaSlideshow` and `SpinoramaCarousel` components have been merged into a single component called **SpinoramaWrapper**

## 0.3.8
- Changed `Grid` to `Box` for the wrapper in the **SpinoramaCarousel** component. This change was made to provide a more flexible and appropriate container for the carousel items

## 0.3.7
- Added `fit-content` to **SpinoramaItem** component

## 0.3.6
- Added `item` attribute to **SpinoramaItem** component

## 0.3.5
- Change `SpinoramaItem` to MUI **Grid**

## 0.3.4
- Fix the `bug` in naming **carousel**

## 0.3.3
- Moved `.prettierignore` and `.prettierrc` to the root of the project
- Create `SpinoramaCarousel` component

## 0.3.2
- Added `@vercel/analytics` to track website visitors and gather anonymous usage data. This will help us understand how our package is being used and make informed decisions about its development

## 0.3.1
- Added `Rubik` font for both **arabic** and **persian** languages

## 0.3.0
- Create `basic` structure for **documentation**. This includes the main documentation template, folder structure, and basic content

## 0.2.0
- Create `documentation` for the project

## 0.1.21
- Create `reverse` setting for **slideshow** component to reverse the order of items in the slideshow

## 0.1.20
- Create `justify` setting for **slideshow** component to align items within the slideshow

## 0.1.19
- Implement `lazy loading` for **items** in the slideshow component

## 0.1.18
- Check children in `slideshow` and change them if they aren't `items`

## 0.1.17
- Create `SpinoramaItem` component

## 0.1.16
- Add `tab-size` to slideshow

## 0.1.15
- Add `Grid` for each item in the **slideshow**

## 0.1.14
- Create `SpinoramaSettings`

## 0.1.13
- Change `package.json`

## 0.1.12
- Change the name of `SpinoramaSlideshow` to `Slideshow`
- Create `Spinorama` component

## 0.1.11
- Export `types` in the output

## 0.1.10
- Fixed bugs in publish

## 0.1.9
- Fixed bugs in publish

## 0.1.8
- Added installing code in **README.md** file

## 0.1.7
- Removed `babel` from **package.json** file

## 0.1.6
- Fixed bugs in publish

## 0.1.5
- Export `types` from all files
- Changed `README.md` for **note**

## 0.1.4
- Changed `README.md` for **under development**

## 0.1.3
- Created `SpinoramaSlideshow` component

## 0.1.2
- Created `src` **directory**

## 0.1.1
- Added `homepage` to package.json

## 0.1.0
- Initial commit
