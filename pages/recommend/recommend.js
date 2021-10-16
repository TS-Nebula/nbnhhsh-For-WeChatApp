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
        img: 'https://cdn.lo-li.icu/nbnhhsh/9cf5e7720cb543d0b7a7ea35dceb19c4.jpeg',
        url: '/Post/CJ/Post'
    },
      {
        title: '微博常见词',
        img: 'https://cdn.lo-li.icu/nbnhhsh/afdfdsgadgs.jpeg',
        url: '/Post/WeiBo/Post'
      },
      {
        title: '聊天常见词',
        img: 'https://cdn.lo-li.icu/nbnhhsh/4e441a7d7aaa45a5832d5ec3ba7259b4.jpeg',
        url: '/Post/Chat/Post'
      },
      {
        title: '如何猜词',
        img: 'https://cdn.lo-li.icu/nbnhhsh/3719ee33289b4f4784c1c5b60fd3709a.jpeg!0.9jpg',
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