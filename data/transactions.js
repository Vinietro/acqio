const { faker } = require('@faker-js/faker')

module.exports = [{
  request: {
    url: 'v1/transactions'
  },
  response: {
    body: [
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      },
      {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        status: faker.helpers.arrayElement(['authorized', 'pre-authorized', 'done', 'cancelled', 'denied']),
        source: faker.helpers.arrayElement(['Venda digital', 'Venda física']),
        creditCardIssuer: faker.helpers.arrayElement(['mastercard', 'pix']),
        code: faker.random.numeric(6),
        grossValue: faker.finance.amount(),
        netValue: faker.finance.amount(),
        paymentMethod: faker.helpers.arrayElement(['Pix', 'Crédito à vista']),
        store: faker.company.name(),
        document: faker.random.numeric(14)
      }
    ]
  }
}]
