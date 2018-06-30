import {notify} from '../index.js';

test('notify', () => {
    notify.error('test');
    expect(document.body.innerHTML).toBe(
        '<div class="wec-notification error" style="right: -320px; z-index: 10001; top: 16px;">'
        + '<i class="notification-icon icon icon-error"></i>'
        + ' <div class="notification-group">'
        + ' <div class="notification-title"><b>error</b></div>'
        + ' <div class="notification-message">test</div>'
        + ' </div>'
        + ' <i class="icon icon-close"></i>'
        + '</div>'
    )
})