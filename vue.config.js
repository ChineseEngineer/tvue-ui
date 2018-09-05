const SERVERS = {
  DEVESERVER: 'http://t100cwj.zhengtoon.com/jyt-cwj-web', // 开发服务器
  TESTSERVER: '', // 测试服务器
  TEMPSERVER: '' // 临时服务器
}
const APISERVER = SERVERS.DEVESERVER

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/jyt-cwj-web' : '',
  devServer: {
    proxy: {
      '/cwj': {
        target: APISERVER,
        ws: true,
        changeOrigin: true
      },
      '/loginAppWithCode': {
        target: APISERVER,
        changeOrigin: true,
        secure: false
      }
    }
  }
}
