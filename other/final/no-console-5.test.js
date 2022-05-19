const {RuleTester} = require('eslint')
const rule = require('./no-console-5')

const ruleTester = new RuleTester()
ruleTester.run('no-console', rule, {
  valid: [
    'info()',
    'console',
    'console.log',
    'console.baz()',
    {code: 'console.warn()', options: [{allowedMethods: ['warn']}]},
  ],
  invalid: [
    invalid('console.log()'),
    invalid('console.info()'),
    invalid('console.warn()'),
    invalid(
      `
        var csl = console
        csl.log()
      `,
    ),
  ],
})

function invalid(code) {
  return {
    code,
    errors: [{message: 'Using console is not allowed'}],
  }
}
