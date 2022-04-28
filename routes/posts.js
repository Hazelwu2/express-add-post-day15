const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.post('/', async (req, res, next) => {
  try {
    /* 請在此填寫答案 */
    // 取得來自 request body 的資料
    const { content, image, likes } = req.body

    // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
    //                       -> 未填寫 content 欄位 -> 回傳失敗回應
    if (!content) {
      res.status(400).json({
        status: 'fail',
        message: '缺少 Content 欄位'
      })
    }

    const newPost = await Post.create({
      content,
      image,
      likes,
    })

    res.status(201).json({
      status: 'success',
      message: '建立成功',
      data: newPost
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'false',
      "message": "發生錯誤：" + error
    });
  }
})


module.exports = router;

