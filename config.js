"use strict";
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/*.spec.js'],
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    useAllAngular2AppRoots: true
};
//# sourceMappingURL=config.js.map