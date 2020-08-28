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
    wx.request({
      url: 'https://nbnhhsh.fa-dream.top/api/nbnhhsh/guess',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        text: input
      },
      success(res) {
        try{
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
        }catch (e) {
          _this.setData({
              result:"暂无数据"
          })
        }

        }
      
  })
  }
})