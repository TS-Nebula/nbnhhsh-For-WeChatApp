const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '追星常见词',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/Post/CJ/Post'
    },
      {
        title: '微博常见词',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/Post/WeiBo/Post'
      },
      {
        title: '聊天常见词',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/Post/Chat/Post'
      },
      {
        title: '如何猜词',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/Post/How/Post'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/recommend' + e.currentTarget.dataset.url
      })
    },
  }
});