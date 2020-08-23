Page({
  data: {
    result:"暂无数据",
 },

  watchPassWord: function (event) {
    var a =(event.detail.value);
 },

  btnclick : function(event){
    wx.request({
      url: 'https://lab.magiconch.com/api/nbnhhsh/guess', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
    this.setData({
      result: a
    })
  }
})