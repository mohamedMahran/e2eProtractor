import { Config } from 'protractor';
export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/*.spec.js'],
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    useAllAngular2AppRoots: true
}