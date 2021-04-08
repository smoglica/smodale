import svelteNotificationsStore from 'svelte-notifications/src/store';

export const NotificationTypeEnum = Object.freeze({
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
});

export const notify = (text, options) => {
  svelteNotificationsStore.addNotification({
    removeAfter: 4500,
    position: 'top-center',
    ...options,
    text,
  });
};

export const notifyWarning = (text, options) => notify(text, {
  ...options,
  type: NotificationTypeEnum.WARNING,
});

export const notifyDanger = (text, options) => notify(text, {
  ...options,
  type: NotificationTypeEnum.DANGER,
});

export const notifySuccess = (text, options) => notify(text, {
  ...options,
  type: NotificationTypeEnum.SUCCESS,
});
