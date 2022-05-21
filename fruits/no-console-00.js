// eslint exercise 1 (no-console)
// When you're finished with this exercise, run
//   "npm start exercise.eslint.2"
//   to move on to the next exercise

module.exports = {
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
