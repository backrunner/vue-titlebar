<template>
  <div class="titlebar" :class="[styleClass, stylePlatform]">
    <div class="titlebar-resize-handle top"></div>
    <div class="titlebar-resize-handle right"></div>
    <div class="titlebar-resize-handle left"></div>
    <div v-if="platform === 'darwin'" class="titlebar-buttons-osx">
      <div class="macButton macButtonClose" @click="onClose()" v-if="isClosable">
        <svg name="TitleBarCloseMac" width="12" height="12" viewBox="0 0 12 12">
          <path
            stroke="#4c0000"
            fill="none"
            d="M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z"
          ></path>
        </svg>
      </div>
      <div class="macButton macButtonMinimize" @click="onMinimize()" v-if="isMinimizable">
        <svg name="TitleBarMinimizeMac" width="12" height="12" viewBox="0 0 12 12">
          <rect fill="#975500" width="8" height="2" x="2" y="5" fill-rule="evenodd"></rect>
        </svg>
      </div>
      <div class="macButton macButtonMaximize" @click="onMaximize()" v-if="isMaximizable">
        <svg name="TitleBarMaximizeMac" width="12" height="12" viewBox="0 0 12 12">
          <g fill="#006500" fill-rule="evenodd">
            <path
              d="M5,3 C5,3 5,6.1325704 5,6.48601043 C5,6.83945045 5.18485201,7 5.49021559,7 L9,7 L9,6 L8,6 L8,5 L7,5 L7,4 L6,4 L6,3 L5,3 Z"
              transform="rotate(180 7 5)"
            ></path>
            <path
              d="M3,5 C3,5 3,8.1325704 3,8.48601043 C3,8.83945045 3.18485201,9 3.49021559,9 L7,9 L7,8 L6,8 L6,7 L5,7 L5,6 L4,6 L4,5 L3,5 Z"
            ></path>
          </g>
        </svg>
      </div>
    </div>

    <div class="titlebar-header">
      <div class="titlebar-icon" v-if="showIcon">
        <slot name="icon">
          <svg
            t="1619442959962"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2070"
          >
            <path
              d="M112.981333 498.261333c-44.288-77.226667-53.290667-149.504-21.802666-203.989333 42.154667-73.045333 147.968-98.56 281.770666-74.197333a13.738667 13.738667 0 1 1-4.906666 27.008c-123.733333-22.528-218.069333 0.213333-253.098667 60.928-25.813333 44.672-18.048 107.050667 21.845333 176.64a13.738667 13.738667 0 1 1-23.808 13.653333z m636.586667-258.944c78.293333 1.024 134.656 25.429333 160.042667 69.376 34.986667 60.544 7.68 153.386667-73.301334 249.045334a13.738667 13.738667 0 1 0 20.906667 17.749333c87.637333-103.509333 118.229333-207.616 76.16-280.533333-30.976-53.632-96.426667-81.92-183.424-83.072a13.738667 13.738667 0 1 0-0.341333 27.434666z m-79.104 650.197334a13.738667 13.738667 0 0 0-18.858667 4.693333c-39.850667 66.261333-88.746667 102.357333-139.093333 102.357333-70.058667 0-136.874667-70.272-179.2-188.501333a13.738667 13.738667 0 1 0-25.856 9.258667C353.237333 945.237333 428.202667 1024 512.426667 1024c61.44 0 118.314667-41.898667 162.688-115.626667a13.738667 13.738667 0 0 0-4.693334-18.858666z m313.856-110.677334a65.706667 65.706667 0 0 1-103.936 53.333334c-104.746667 61.653333-304.896 30.293333-493.226667-78.506667-80.213333-46.293333-150.485333-102.058667-204.586666-161.493333a13.738667 13.738667 0 1 1 20.309333-18.474667c52.138667 57.301333 120.192 111.317333 197.973333 156.202667 177.792 102.656 364.928 133.12 460.672 81.322666a65.706667 65.706667 0 1 1 122.794667-32.384z m-813.312 0a65.706667 65.706667 0 1 1-97.493333-57.386666c-9.941333-122.752 119.04-287.317333 314.026666-399.872 80.981333-46.762667 165.290667-79.957333 244.522667-96.896a13.738667 13.738667 0 0 1 5.76 26.794666c-76.373333 16.384-157.994667 48.512-236.586667 93.866667-183.637333 106.026667-304.981333 258.858667-300.714666 368.085333 1.621333-0.128 3.2-0.256 4.821333-0.256 36.266667 0 65.706667 29.44 65.706667 65.706667zM446.805333 65.706667a65.706667 65.706667 0 0 1 131.328 0c0 0.981333-0.085333 1.92-0.128 2.858666 108.757333 56.192 184.32 247.893333 184.32 469.461334 0 91.093333-12.714667 178.517333-36.437333 254.293333a13.738667 13.738667 0 1 1-26.197333-8.192c22.869333-73.045333 35.2-157.738667 35.2-246.101333 0-208.64-69.376-388.053333-164.138667-442.154667a65.621333 65.621333 0 0 1-123.946667-30.165333z m55.637334 425.856a47.530667 47.530667 0 1 0 20.053333 92.928 47.530667 47.530667 0 0 0-20.053333-92.928z"
              p-id="2071"
            ></path>
          </svg>
        </slot>
      </div>

      <div class="titlebar-name" v-if="showTitle">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="titlebar-menu" v-if="notDarwin">
      <slot name="menu"></slot>
    </div>

    <div class="titlebar-buttons" v-if="notDarwin">
      <button
        aria-label="minimize"
        title="Minimize"
        tabindex="-1"
        @click="onMinimize()"
        v-if="isMinimizable"
      >
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path d="M 0,5 10,5 10,6 0,6 Z"></path>
        </svg>
      </button>

      <button
        aria-label="maximize"
        title="Maximize"
        tabindex="-1"
        @click="onMaximize()"
        v-if="isMaximizable"
      >
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z"></path>
        </svg>
      </button>

      <button
        aria-label="close"
        title="Close"
        tabindex="-1"
        class="close"
        @click="onClose()"
        v-if="isClosable"
      >
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path
            d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-titlebar',
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    platform: {
      type: String,
      required: true,
    },
    isMinimizable: {
      type: Boolean,
      default: true,
    },
    isMaximizable: {
      type: Boolean,
      default: true,
    },
    isClosable: {
      type: Boolean,
      default: true,
    },
    onMinimize: {
      type: Function,
    },
    onMaximize: {
      type: Function,
    },
    onClose: {
      type: Function,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    styleClass() {
      return `titlebar-style-${this.theme}`;
    },
    stylePlatform() {
      return `titlebar-platform-${this.platform}`;
    },
    notDarwin() {
      return this.platform !== 'darwin';
    },
  },
};
</script>

<style lang="scss">
$titlebar-height: 28px;

.titlebar {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  height: $titlebar-height;

  -webkit-app-region: drag;

  &.titlebar-style-dark {
    color: #fff;
    background: #2d3135;
  }

  &.titlebar-style-light {
    color: #2c2c2c;
    background: #f6f6f6;
  }

  .titlebar-resize-handle {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-app-region: no-drag;

    &.top {
      width: 100%;
      height: 3px;
    }

    &.right {
      left: auto;
      right: 0;
      width: 3px;
      height: $titlebar-height;
    }

    &.left {
      width: 3px;
      height: $titlebar-height;
    }
  }

  .titlebar-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .titlebar-icon,
  .titlebar-name {
    display: flex;
    align-content: center;
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 14px;
    line-height: $titlebar-height;
    padding: 0 12px;
    height: $titlebar-height;

    > svg,
    > img {
      display: block;
      align-content: center;
      align-self: center;
      width: auto;
      height: 16px;
    }
  }

  .titlebar-icon ~ .titlebar-name {
    padding-left: 0;
  }

  &.titlebar-platform-darwin {
    .titlebar-header {
      width: 100%;
      text-align: center;
      position: absolute;
      pointer-events: none;
    }
  }

  .titlebar-menu {
    display: flex;
    -webkit-app-region: no-drag;

    .titlebar-menu-item {
      min-width: 0;
      position: relative;
      cursor: pointer;

      button {
        border: none;
        box-shadow: none;
        background: transparent;
        height: 100%;
        width: 100%;

        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        color: currentColor;
        font-size: 13px;
        padding: 0 10px;
        outline: none;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .titlebar-buttons {
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: auto;

    button {
      -webkit-app-region: no-drag;
      display: inline-block;
      position: relative;
      width: 45px;
      height: 100%;
      padding: 0;
      margin: 0;
      overflow: hidden;
      border: none;
      box-shadow: none;
      border-radius: 0;
      color: currentColor;
      background-color: transparent;
      line-height: 10px;
      outline: none;

      svg {
        fill: currentColor;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        color: currentColor;
      }

      &.close:hover {
        background-color: #e81123;
        color: #fff;
      }
    }
  }

  .titlebar-buttons-osx {
    display: flex;
    box-sizing: border-box;
    padding: 10px;
    width: 70px;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;

    .macButton {
      -webkit-app-region: no-drag;
      -webkit-box-sizing: border-box;
      border-radius: 50%;
      box-sizing: border-box;
      height: 12px;
      width: 12px;

      background-color: #dcdcdc;
      border-color: #d1d1d1;

      &.macButtonClose {
        background-color: #fc615d;
      }

      &.macButtonMinimize {
        background-color: #fdbc40;
      }

      &.macButtonMaximize {
        background-color: #34c749;
      }

      svg {
        display: block;
        visibility: hidden;
      }
    }

    &:hover {
      .macButton {
        svg {
          visibility: visible;
        }
      }
    }
  }
}
</style>
