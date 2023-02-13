import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

import '@pnotify/core/dist/Material.css';
import { defaults, Stack } from '@pnotify/core';

const myStack = new Stack({
  modal: false,
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  push: 'top',
  maxStrategy: 'close',
  maxClosureCausesWait: false,
});

defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 1000;
defaults.mouseReset = false;
defaults.closerHover = false;
defaults.sticker = false;
defaults.stickerHover = false;
defaults.stack = myStack;

import { success, error } from '@pnotify/core';

function notification(article) {
  if (article.hits.length === 0) {
    error({
      text: 'Nothing found.',
    });
  } else {
    success({
      text: `We found ${article.total} results`,
    });
  }
}

export default notification;
