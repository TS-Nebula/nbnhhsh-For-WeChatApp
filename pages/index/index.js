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
    this.setData({
      result:"加载中..."
    })  
    let input = this.data.sercsData
    let _this = this
    let url = 'https://nbnhhsh.ts-nebula.cn/api/search/' + input
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
          console.log(res.data)
          _this.setData({
            result: res.data
          })

        }
      
  })
  }
})

