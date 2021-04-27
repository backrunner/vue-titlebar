# vue-titlebar

This is a fork version of [wuild's vue-titlebar](https://github.com/Wuild/vue-titlebar).

Here's the difference:

1. Change menu to a slot.
2. Bundled with rollup.
3. Icon will not show by default and change default icon to electron.
4. Add lint to the project.

## Installation

Install with npm:

```bash
npm install --save @backrunner/vue-titlebar
```

```javascript
const VueTitlebar = require('@wuild/vue-titlebar');

Vue.use(VueTitlebar);
```

## Usage

### Themes / Platform

![windows dark](./images/titlebar/win32_dark.png)

![windows light](./images/titlebar/win32_light.png)

![osx dark](./images/titlebar/osx_dark.png)

![osx light](./images/titlebar/osx_light.png)

### Properties

|          Name | type     | default | description                                                |
| ------------: | -------- | ------- | ---------------------------------------------------------- |
|         theme | String   | light   | theme (dark, light)                                        |
|      platform | String   | --      | (required) specify current platform (win32, darwin, linux) |
| isMinimizable | Boolean  | true    | show minimize button                                       |
| isMaximizable | Boolean  | true    | show maximize button                                       |
|    isClosable | Boolean  | true    | show close button                                          |
|    onMinimize | Function | --      | if minimize button is clicked                              |
|    onMaximize | Function | --      | if maximize button is clicked                              |
|       onClose | Function | --      | if close button is clicked                                 |
|      showIcon | Boolean  | false   | theme (dark, light)                                        |
|     showTitle | Boolean  | true    | theme (dark, light)                                        |

### Example

[full example](./examples/titlebar.vue)

```vue
<v-titlebar
  :theme="theme"
  :platform="platform"
  :on-close="close"
  :on-maximize="toggleMaximize"
  :on-minimize="minimize"
  :is-maximizable="isMaximizable"
  :is-closable="isClosable"
  :is-minimizable="isMinimizable"
  :show-icon="showIcon"
  :show-title="showTitle"
>
  <template slot="icon">
    <img src="image.png" alt="icon" />
  </template>
  <template slot="title">
    App Name
  </template>
</v-titlebar>
```

## License

MIT
