module.exports = {
  uploadPic: (ctx) => {
    const imgFileList = ctx.files.imgFileList;
    console.log(imgFileList)
    if (imgFileList.length) {
      return {
        status: 200,
        data: '上传成功'
      };
    } else {
      return {
        status: 400,
        message: '上传失败'
      };
    }
  }
};