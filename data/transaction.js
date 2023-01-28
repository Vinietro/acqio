const { faker } = require('@faker-js/faker')

module.exports = [{
  request: {
    url: 'v1/transaction/:id'
  },
  response: {
    body: {
      id: faker.datatype.uuid(),
      nsuAcqio: faker.random.numeric(8),
      authorizationId: faker.random.numeric(6),
      orderNumber: faker.random.numeric(2),
      status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
      createdAt: faker.date.past(),
      grossValue: faker.finance.amount(),
      netValue: faker.finance.amount(),
      document: faker.random.numeric(14),
      paymentMethod: faker.helpers.arrayElement(['Pix via QR Code no e-commerce', 'Crédito à vista no e-commerce'])
    }
  }
}]
