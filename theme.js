class Theme {
    constructor() {
        this._mode = 'light';
        this._colors = {
            light: { background: '#ffffff', text: '#000000', primary: '#0066cc' },
            dark:  { background: '#1a1a1a', text: '#f0f0f0', primary: '#4da6ff' }
        };
    }

    MALAM_getMode() {
        return this._mode;
    }

    MALAM_getColors() {
        return this._colors[this._mode];
    }

    MALAM_isDarkMode() {
        return this._mode === 'dark';
    }

    MALAM_setMode(mode) {
        if (!['light', 'dark'].includes(mode)) throw new Error('Invalid mode');
        this._mode = mode;
    }

    MALAM_toggle() {
        this._mode = this._mode === 'light' ? 'dark' : 'light';
    }
}

module.exports = Theme;
