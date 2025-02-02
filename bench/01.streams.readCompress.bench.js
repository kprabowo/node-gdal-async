const b = require('benny')
const { readTest, readTestAsyncIterator } = require('./streams.common')

module.exports = b.suite(
  'RasterReadStream w/Compression',

  b.add('RasterReadStream w/ blockOptimize',
    async () => readTest('/vsimem/AROME_T2m_10.tiff', true)),
  b.add('RasterReadStream w/o blockOptimize',
    async () => readTest('/vsimem/AROME_T2m_10.tiff', false)),
  b.add('RasterReadStream w/ blockOptimize w/async iterator',
    async () => readTestAsyncIterator('/vsimem/AROME_T2m_10.tiff', true)),
  b.add('RasterReadStream w/o blockOptimize w/async iterator',
    async () => readTestAsyncIterator('/vsimem/AROME_T2m_10.tiff', false)),

  b.cycle(),
  b.complete()
)
