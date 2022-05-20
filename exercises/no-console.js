// eslint exercise 0 (no-console)
// When you're finished with this exercise, run
//   "npm start exercise.eslint.1"
//   to move on to the next exercise

module.exports = {
  // you're going to need context :)
  // eslint-disable-next-line no-unused-vars
  create(context) {
    return {
      Identifier(node) {
        if (node.name === 'console') {
          context.report({
            node,
            message: 'Using console is not allowed',
          })
        }
      },
    }
  },
}
