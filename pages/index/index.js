Page({
  data: {
    result:"暂无数据",

 },

  watchPassWord: function (event) {
    var requests =(event.detail.value);
    this.setData({
      sercsData: requests
    })
 },

  btnclick : function(event){
    let a = this.data.sercsData
    let _this = this
    wx.request({
      url: 'https://lab.magiconch.com/api/nbnhhsh/guess',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        text: a
      },
      success(res) {
        console.log(res.data[0].trans[0])
        let trans = res.data[0].trans
        let words = ''
        for (let i in trans){
          console.log(i)
          words += trans[i]+ " "
        }
        _this.setData({
          result: words
        })
      }
  })
  }
})