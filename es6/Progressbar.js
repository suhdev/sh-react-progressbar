import * as React from 'react';
export const Progressbar = React.createClass({
    _formatLabel(val, originalValue, min, max) {
        return val + '%';
    },
    render() {
        let props = this.props, max = props.max || 100, min = props.min || 0, val = (props.value - min) / (max - min) * 100, formatLabel = props.formatLabel || this._formatLabel;
        return (React.createElement('div', { className: ('sh-react-progressbar ' + (props.className || '')) }, React.createElement('div', { className: 'progressbar-wrapper' }, [
            React.createElement('div', { className: 'progressbar-progress', style: { width: (val) + '%' } }),
            React.createElement('div', { className: 'progress-value' }, formatLabel(val, props.value, max, min))
        ])));
    }
});
export default Progressbar;
if (window && document) {
    (function (ShReact, W, D) {
        ShReact.Progressbar = Progressbar;
    }(window.ShReact = window.ShReact || {}, window, document));
}
