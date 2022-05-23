// eslint exercise 0 (no-console)
// When you're finished with this exercise, run
//   "npm start exercise.eslint.1"
//   to move on to the next exercise

const disallowedMethods = ['log', 'info', 'warn']

module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of console',
      cateroty: 'Best Practices',
      recommended: true,
    },
  },
  // you're going to need context :)
  // eslint-disable-next-line no-unused-vars
  create(context) {
    return {
      Identifier(node) {
        console.log(node)
        const isConsoleCall = looksLike(node, {
          name: 'console',
          parent: {
            type: 'MemberExpression',
            property: {
              name: val => disallowedMethods.includes(val),
            },
            parent: {
              type: 'CallExpression',
            },
          },
        })
        if (isConsoleCall) {
          context.report({
            node,
            message: 'Using console is not allowed',
          })
        }
      },
    }
  },
}

function looksLike(a, b) {
  return (
    a &&
    b &&
    Object.keys(b).every(bKey => {
      const bVal = b[bKey]
      const aVal = a[bKey]
      if (typeof bVal === 'function') {
        return bVal(aVal)
      }
      return isPrimitive(bVal) ? bVal === aVal : looksLike(aVal, bVal)
    })
  )
}

//这个方法很高级 😂 判断是否为原始值
function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val)
}
